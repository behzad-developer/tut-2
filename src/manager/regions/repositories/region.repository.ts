import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { RegionEntity } from '../entities/region.entity';
import { RegionInterface } from '../interfaces/region.interface';
import { AddressEntity } from 'src/addresses/entities/address.entity';
import { RegionQueryDto } from '../dto/region-query.dto';

@Injectable()
export class RegionRepository extends Repository<RegionEntity> {
  constructor(private dataSource: DataSource) {
    super(RegionEntity, dataSource.createEntityManager());
  }

  createAndSave(payload?: Partial<RegionInterface>) {
    const entity = new RegionEntity(payload);
    if (payload.userIds) {
      entity.users = payload.userIds.map(
        (userIds) =>
          new UserEntity({
            id: userIds,
          }),
      );
    }
    if (payload.addressIds) {
      entity.addresses = payload.addressIds.map(
        (addressIds) =>
          new AddressEntity({
            id: addressIds,
          }),
      );
    }
    return this.save(entity);
  }

  findAll(dto: RegionQueryDto) {
    const { limit, search, skip, orderBy, orderDirection } = dto;
    const query = this.createQueryBuilder('roles');
    if (search) {
      query.where('regions.name ILIKE (:search) ', {
        search: `%${search}%`,
      });
    }
    return query
      .orderBy(orderBy)
      .orderBy(orderDirection)
      .take(limit)
      .skip((skip - 1) * limit)
      .getMany();
  }
  findOneByCredential(id: number) {
    return this.createQueryBuilder('r').where('r.id =:id', { id }).getOne();
  }
  findIds(ids: number[]) {
    return this.createQueryBuilder('regions')
      .where('regions.id IN (:...ids)', { ids })
      .getMany();
  }
}
