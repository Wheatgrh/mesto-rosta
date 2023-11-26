import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { CertificateDto } from './dto/certificate.dto';
import { Certificate } from './entities/certificate.entity';
import { User } from '../users/entities/user.entity';
import * as fs from 'node:fs';
import * as cheerio from 'cheerio';

import axios from 'axios';
import * as pdf from 'pdf-parse';
import { UploadFile } from '../uploads/entities/file.entity';
interface CourseData {
  user: string;
  course: string;
  date: string;
  url: string;
  id: string;
}
@Injectable()
export class CertificatesService {
  constructor(private readonly em: EntityManager) {}

  async downloadFileToBuffer(url) {
    const response = await axios({
      method: 'GET',
      url: url,
      responseType: 'arraybuffer', // Важно указать, что ожидаемый ответ - это 'arraybuffer'
    });

    return Buffer.from(response.data);
  }

  private finishCourses(list: string[]): CourseData | false {
    const id = list[8].slice(3);
    return {
      user: list[2],
      course: list[3],
      date: list[7],
      url: `https://gb.ru/certificates/${id}`,
      id,
    };
  }
  private async validate(file): Promise<CourseData | false> {
    file = await this.em.findOne(UploadFile, { uuid: file.uuid });

    try {
      const dataBuffer = await this.downloadFileToBuffer(file.url);
      const data = await pdf(dataBuffer);
      const list = data.text.split('\n');
      const isCourses = list.filter((item) => item.includes('Окончил курс'));
      if (isCourses.length) {
        return this.finishCourses(list);
      }
      return false;
    } catch (error) {
      console.error('Error parsing PDF:', error);
      return false;
    }
  }

  async verification(data: CourseData): Promise<boolean> {
    try {
      const response = await axios.get(data.url);
      const $ = cheerio.load(response.data);
      const user = $('.name').text();
      const course = $('.title').text();
      const id = $('.number').text().slice(2);
      return data.user === user && data.course === course && data.id === id;
    } catch (error) {
      console.error('Error verifying certificate:', error);
      return false;
    }
  }

  async verifyCertificate(path): Promise<boolean> {
    try {
      let result = false;
      const data = await this.validate(path);
      if (data) {
        result = await this.verification(data);
        console.log('result', result);
      }
      return result;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async create(dto: CertificateDto) {
    const user = await this.em.findOne(User, { uuid: dto.userUuid });
    const cert = this.em.create(Certificate, { ...dto, course: null });
    const res = await this.validate(cert.file);
    let tmp = false;
    if (res) {
      tmp = await this.verification(res);
    }
    cert.validated = tmp;
    cert.user = user;
    await this.em.persistAndFlush(cert);
    delete cert.user;
    return cert;
  }
}
