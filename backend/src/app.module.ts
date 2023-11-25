import { Module, Scope } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { InterestsModule } from './interests/interests.module';
import { UploadsModule } from './uploads/uploads.module';
import { CertificatesModule } from './certificates/certificates.module';
import { CoursesModule } from './courses/courses.module';
import { PartnersModule } from './partners/partners.module';
import { AuthModule } from './auth/auth.module';
import { RedisModule } from './redis/redis.module';
import { MikroOrmModule } from '@mikro-orm/nestjs/mikro-orm.module';
import mikroOrmConfig from './mikro-orm.config';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      ...mikroOrmConfig,
      scope: Scope.REQUEST,
    }),
    UsersModule,
    InterestsModule,
    UploadsModule,
    CertificatesModule,
    CoursesModule,
    PartnersModule,
    AuthModule,
    RedisModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
