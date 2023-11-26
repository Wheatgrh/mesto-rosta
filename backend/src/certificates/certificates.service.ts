import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { CertificateDto } from './dto/certificate.dto';
import { Certificate } from './entities/certificate.entity';
import { User } from '../users/entities/user.entity';
import * as fs from 'node:fs';
import * as cheerio from 'cheerio';
import * as natural from 'natural';

import axios from 'axios';
import * as pdf from 'pdf-parse';
import { UploadFile } from '../uploads/entities/file.entity';
import { log } from 'node:console';
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

  private async classifyCourseLanguage(courseName) {
    const languageKeywords = {
      JavaScript: [
        'React',
        'Angular',
        'Vue.js',
        'Node.js',
        'Express.js',
        'npm',
        'Webpack',
        'Babel',
        'TypeScript',
        'ES6',
        'JQuery',
        'D3.js',
        'Mocha',
        'Jest',
        'Redux',
        'Meteor',
        'Backbone.js',
      ],
      Python: [
        'Django',
        'Flask',
        'Pandas',
        'NumPy',
        'SciPy',
        'TensorFlow',
        'PyTorch',
        'Matplotlib',
        'Scikit-Learn',
        'Jupyter',
        'Anaconda',
        'PIP',
        'BeautifulSoup',
        'Selenium',
        'PyGame',
        'Keras',
        'SQLAlchemy',
      ],
      Java: [
        'Spring',
        'Hibernate',
        'Apache Maven',
        'Apache Ant',
        'JavaFX',
        'J2EE',
        'Swing',
        'JUnit',
        'Eclipse',
        'NetBeans',
        'IntelliJ IDEA',
        'Tomcat',
        'JDBC',
        'JavaBeans',
      ],
      'C#': [
        '.NET',
        'ASP.NET',
        'Entity Framework',
        'Xamarin',
        'Visual Studio',
        'NuGet',
        'WPF',
        'Blazor',
        'Unity',
        'LINQ',
        'Azure',
        'MVC',
      ],
      'C++': [
        'Boost',
        'Qt',
        'STL',
        'CMake',
        'GCC',
        'Clang',
        'OpenGL',
        'Unreal Engine',
        'SFML',
        'OpenCV',
        'MFC',
        'CUDA',
      ],
      PHP: [
        'Laravel',
        'Symfony',
        'CodeIgniter',
        'Zend Framework',
        'Composer',
        'PHPUnit',
        'Drupal',
        'WordPress',
        'Magento',
        'Yii',
        'CakePHP',
        'Slim',
      ],
      Ruby: [
        'Ruby on Rails',
        'Sinatra',
        'RubyGems',
        'RVM',
        'Capistrano',
        'Puma',
        'Sidekiq',
        'RSpec',
        'Cucumber',
      ],
      Go: [
        'Go Modules',
        'GoLand',
        'Gin',
        'Beego',
        'Revel',
        'Echo',
        'Martini',
        'Gorilla Mux',
        'Gorm',
      ],
      Swift: [
        'SwiftUI',
        'UIKit',
        'Vapor',
        'Xcode',
        'Swift Package Manager',
        'Core Data',
        'ARKit',
        'SpriteKit',
        'SceneKit',
      ],
      Kotlin: [
        'Spring Boot',
        'Ktor',
        'Jetpack Compose',
        'IntelliJ IDEA',
        'Kotlin Multiplatform',
        'Android Studio',
        'Coroutines',
        'Arrow',
        'Exposed',
      ],
      Rust: [
        'Cargo',
        'Rustup',
        'Actix',
        'Tokio',
        'Serde',
        'Rocket',
        'Diesel',
        'WASM',
        'Async-std',
        'Yew',
      ],
      Дизайн: [
        'Adobe Photoshop',
        'Adobe Illustrator',
        'CorelDRAW',
        'Sketch',
        'Figma',
        'Inkscape',
        'HTML',
        'CSS',
        'JavaScript',
        'Bootstrap',
        'WordPress',
        'Adobe XD',
        'InVision',
        'Axure',
        'Balsamiq',
        'Blender',
        'Autodesk Maya',
        'Cinema 4D',
        '3ds Max',
        'ZBrush',
        'SolidWorks',
        'AutoCAD',
        'Fusion 360',
        'SketchUp',
        'Revit',
        'V-Ray',
        'CLO3D',
        'Lectra',
      ],
      Маркетинг: [
        'Google Analytics',
        'Google AdWords',
        'Facebook Ads',
        'Instagram Ads',
        'Mailchimp',
        'Google Search Console',
        'SEMrush',
        'Ahrefs',
        'Moz',
        'WordPress',
        'Yoast SEO',
        'Canva',
        'Hootsuite',
        'Shopify',
        'WooCommerce',
        'Magento',
        'Salesforce',
        'HubSpot',
        'Zoho CRM',
        'SendGrid',
        'Constant Contact',
      ],
    };
    const tokenizer = new natural.WordTokenizer();
    const tokens = tokenizer.tokenize(courseName);
    for (const lang in languageKeywords) {
      if (languageKeywords[lang].some((keyword) => tokens.includes(keyword))) {
        return lang;
      }
    }
    return 'Unknown';
  }

  async create(dto: CertificateDto) {
    const user = await this.em.findOne(User, { uuid: dto.userUuid });
    const cert = this.em.create(Certificate, { ...dto, course: null });
    const res = await this.validate(cert.file);
    let tmp = false;
    let lang = null;
    if (res) {
      lang = await this.classifyCourseLanguage(res.course);
      tmp = await this.verification(res);
    }
    console.log(lang);
    cert.validated = tmp;
    cert.user = user;
    await this.em.persistAndFlush(cert);
    delete cert.user;
    return cert;
  }
}
