import { Module } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CertificatesController } from './certificates.controller';

@Module({
  providers: [CertificatesService],
  controllers: [CertificatesController]
})
export class CertificatesModule {}
