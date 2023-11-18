import { AddressEntity } from 'src/addresses/entities/address.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'regions',
})
export class RegionEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'integer',
  })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: '250',
    nullable: false,
    unique: true,
  })
  name: string;

  @OneToMany(() => AddressEntity, (addresses) => addresses.regions)
  addresses: AddressEntity[];

  @OneToMany(() => UserEntity, (users) => users.region)
  users: UserEntity[];

  constructor(region?: Partial<RegionEntity>) {
    Object.assign(this, region);
  }
}
