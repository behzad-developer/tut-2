import { Module } from '@nestjs/common';
import { UserTypeService } from './services/user-types.service';
import { UserTypesController } from './controllers/user-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTypeEntity } from './entities/user-type.entity';
import { UserTypeReposotory } from './repository/userType.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserTypeEntity])],
  controllers: [UserTypesController],
  providers: [UserTypeService, UserTypeReposotory],
})
export class UserTypesModule {}
