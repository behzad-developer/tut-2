import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from '../dto/create-user.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../repositories/managerUser.repository';
import { UserQueryDto } from '../dto/managerUser-query.dto';

@Injectable()
export class UsersService {
  userRepository: any;
  constructor(private roleRepository: UserRepository) {}
  async create(CreateUserDto: CreateUsersDto) {
    const hash = bcrypt.hashSync(CreateUserDto.password, 10);
    return this.userRepository.save({
      password: hash,
      phonenumber: CreateUserDto.phonenumber,
      firstName: CreateUserDto.firstName,
      lastName: CreateUserDto.lastName,
      typyId: CreateUserDto.typeId,
    });
  }

  findAll(dto: UserQueryDto) {
    return this.userRepository.findAll(dto);
  }

  findOne(id: number) {
    return this.roleRepository.findOneByCredential(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const { password, firstName, lastName, phonenumber, typeId } =
      updateUserDto;
    const entity = new UserEntity({
      id,
      phonenumber,
      firstName,
      lastName,
      typeId,
    });
    if (password) {
      entity.password = bcrypt.hashSync(password, 10);
    }
    return this.userRepository.save(entity);
  }
}
