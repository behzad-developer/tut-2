import { Module } from '@nestjs/common';
import { ManagerUsersModule } from './users/users.module';
@Module({
  imports: [ManagerUsersModule],
  controllers: [],
  providers: [],
})
export class ManagerModule {}
