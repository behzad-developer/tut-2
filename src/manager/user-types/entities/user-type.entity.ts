import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class UserTypeEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'integer',
  })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    name: 'slug',
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    name: 'cost',
    type: 'integer',
    length: 50,
    nullable: false,
    unique: true,
  })
  cost: number;

  @Column({
    name: 'isDeafult',
    type: 'boolean',
    nullable: false,
  })
  isDefault: number;

  constructor(userType?: Partial<UserTypeEntity>) {
    Object.assign(this, userType);
  }
}
