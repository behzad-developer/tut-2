import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserTypeQueryDto } from '../dto/userType-query.dto';
import { UserTypeEntity } from '../entities/user-type.entity';

@Injectable()
export class UserTypeReposotory extends Repository<UserTypeEntity> {
  constructor(private dataSource: DataSource) {
    super(UserTypeReposotory, dataSource.createEntityManager());
  }

  findAll(dto: UserTypeQueryDto) {
    const { limit, search, skip, orderBy, orderDirection } = dto;
    const query = this.createQueryBuilder('roles');
    if (search) {
      query.where(
        'userTypes.name ILIKE (:search) OR  userTypes.slug ILIKE (:search)',
        {
          search: `%${search}%`,
        },
      );
    }
    return query
      .orderBy(orderBy)
      .orderBy(orderDirection)
      .take(limit)
      .skip((skip - 1) * limit)
      .getMany();
  }
  findOneByCredential(id: number) {
    return this.createQueryBuilder('userTypes')
      .where('userTypes.id =:id', { id })
      .getOne();
  }
  findIds(ids: number[]) {
    return this.createQueryBuilder('userTypes')
      .where('userTypes.id IN (:...ids)', { ids })
      .getMany();
  }
}
