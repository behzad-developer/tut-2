import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'orders',
})
export class OrderEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'integer',
  })
  id: number;

  @Column({
    name: 'cost',
    type: 'integer',
    length: 50,
    nullable: false,
    unique: true,
  })
  cost: number;

  @Column({
    name: 'note',
    type: 'text',
    length: 50,
    nullable: false,
    unique: true,
  })
  note: string;

  @Column({
    name: 'address_id',
    type: 'integer',
    nullable: false,
  })
  addressId: number;

  @Column({
    name: 'client_id',
    type: 'integer',
    nullable: false,
  })
  clientId: number;

  @Column({
    name: 'courier_id',
    type: 'integer',
    nullable: false,
  })
  courierId: number;

  @Column({
    name: 'status_id',
    type: 'integer',
    nullable: false,
  })
  statusId: number;

  constructor(order?: Partial<OrderEntity>) {
    Object.assign(this, order);
  }
}
