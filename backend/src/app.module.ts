import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { InterestsModule } from './interests/interests.module';
import { UploadsModule } from './uploads/uploads.module';

@Module({
  imports: [UsersModule, InterestsModule, UploadsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
