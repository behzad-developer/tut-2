import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'order-statuses',
})
export class OrderStatusEntity {
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
    name: 'slug',
    type: 'varchar',
    length: '50',
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    name: 'color',
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  color: string;

  @Column({
    name: 'isDeafult',
    type: 'boolean',
    nullable: false,
  })
  isDefault: number;

  constructor(orderStatus?: Partial<OrderStatusEntity>) {
    Object.assign(this, orderStatus);
  }
}
