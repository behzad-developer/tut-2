import { RegionEntity } from 'src/manager/regions/entities/region.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
  name: 'addresses',
})
export class AddressEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'integer',
  })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: '50',
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    name: 'user_id',
    type: 'integer',
    nullable: false,
  })
  userId: number;

  @Column({
    name: 'region_id',
    type: 'integer',
    nullable: false,
  })
  regionId: number;

  @Column({
    name: 'isDeafult',
    type: 'boolean',
    nullable: false,
  })
  isDefault: number;

  @OneToMany(() => UserEntity, (users) => users.address)
  users: UserEntity[];

  @ManyToOne(() => RegionEntity, (regions) => regions.addresses)
  regions: RegionEntity[];

  constructor(address?: Partial<AddressEntity>) {
    Object.assign(this, address);
  }
}
