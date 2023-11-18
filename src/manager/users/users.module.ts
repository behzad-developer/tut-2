import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { ManagerUsersController } from './controllers/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { ManagerUserRepository } from './repositories/managerUser.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [ManagerUsersController],
  providers: [UsersService, ManagerUserRepository],
})
export class ManagerUsersModule {}
