import { Injectable } from '@nestjs/common';
import { CreateUserTypeDto } from '../dto/create-user-type.dto';
import { UserTypeQueryDto } from '../dto/userType-query.dto';
import { UserTypeEntity } from '../entities/user-type.entity';
import { UpdateUserTypeDto } from '../dto/update-user-type.dto';
import { UserTypeReposotory } from '../repository/userType.repository';

@Injectable()
export class UserTypeService {
  constructor(private userTypeRepository: UserTypeReposotory) {}
  async create(createUserTypeDto: CreateUserTypeDto) {
    return this.userTypeRepository;
  }

  findAll(dto: UserTypeQueryDto) {
    return this.userTypeRepository.findAll(dto);
  }

  findOne(id: number) {
    return this.userTypeRepository.findOneByCredential(id);
  }

  update(id: number, updateUserTypeDto: UpdateUserTypeDto) {
    const { name, slug } = updateUserTypeDto;
    const role = new UserTypeEntity({
      id,
      name,
      slug,
    });
    return this.userTypeRepository.save(role);
  }
}
