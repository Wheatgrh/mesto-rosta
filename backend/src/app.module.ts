import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { InterestsModule } from './interests/interests.module';
import { UploadsModule } from './uploads/uploads.module';
import { CertificatesModule } from './certificates/certificates.module';

@Module({
  imports: [UsersModule, InterestsModule, UploadsModule, CertificatesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
