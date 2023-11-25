import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { InterestsModule } from './interests/interests.module';
import { UploadsModule } from './uploads/uploads.module';
import { CertificatesModule } from './certificates/certificates.module';
import { CoursesModule } from './courses/courses.module';
import { PartnersModule } from './partners/partners.module';

@Module({
  imports: [
    UsersModule,
    InterestsModule,
    UploadsModule,
    CertificatesModule,
    CoursesModule,
    PartnersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
