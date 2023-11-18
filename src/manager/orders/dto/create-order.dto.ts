import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    type: Number,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsNumber()
  cost: number;

  @ApiProperty({
    type: Number,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsNumber()
  count: number;

  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  note: string;

  @ApiProperty({
    type: Number,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  addressId: number;

  @ApiProperty({
    type: Number,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  clientId: number;

  @ApiProperty({
    type: Number,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  courierId: number;

  @ApiProperty({
    type: Number,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  statusId: number;
}
