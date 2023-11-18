export interface CreateOrderDto {
  cost: number;
  count: number;
  note: string;
  addressId: number;
  clientId: number;
  courierId: number;
  statusId: number;
  regionId: number;
}
