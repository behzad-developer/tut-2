import { Injectable } from '@nestjs/common';
import { AddressEntity } from '../entities/address.entity';
import { DataSource, Repository } from 'typeorm';
import { AddressInterface } from '../interfaces/address.interface';
import { UserEntity } from 'src/users/entities/user.entity';
import { RegionEntity } from 'src/manager/regions/entities/region.entity';
import { AddressQueryDto } from '../dto/address-query.dto';

@Injectable()
export class AddressRepository extends Repository<AddressEntity> {
  constructor(private dataSource: DataSource) {
    super(AddressEntity, dataSource.createEntityManager());
  }
  createAndSave(payload?: Partial<AddressInterface>) {
    const entity = new AddressEntity(payload);
    if (payload.userIds) {
      entity.users = payload.userIds.map(
        (userIds) =>
          new UserEntity({
            id: userIds,
          }),
      );
    }
    if (payload.regionIds) {
      entity.regions = payload.regionIds.map(
        (regionIds) =>
          new RegionEntity({
            id: regionIds,
          }),
      );
    }
    return this.save(entity);
  }

  findAll(dto: AddressQueryDto) {
    const { limit, search, skip, orderBy, orderDirection, regionId, userId } =
      dto;
    const query = this.createQueryBuilder('addresses');
    if (search) {
      query.where('addresses.name ILIKE (:search) ', {
        search: `%${search}%`,
      });
    }
    return query
      .orderBy(orderBy)
      .orderBy(orderDirection)
      .take(regionId)
      .take(userId)
      .take(limit)
      .skip((skip - 1) * limit)
      .getMany();
  }
  findOneByCredential(id: number) {
    return this.createQueryBuilder('a')
      .leftJoinAndSelect('addresses.user', 'user')
      .leftJoinAndSelect('addresses.regions', 'regions')
      .where('a.id =:id', { id })
      .getOne();
  }
  findIds(ids: number[]) {
    return this.createQueryBuilder('addresses')
      .where('addresses.id IN (:...ids)', { ids })
      .getMany();
  }
}
