import { Body, Controller, Post } from '@nestjs/common';
import { CertificateDto } from './dto/certificate.dto';
import { CertificatesService } from './certificates.service';

@Controller('certificates')
export class CertificatesController {
  constructor(private readonly certificatesService: CertificatesService) {}
  @Post()
  async create(@Body() dto: CertificateDto) {
    console.log('dto: ', dto);

    return await this.certificatesService.create(dto);
  }
}
