import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class OrderQueryDto {
  @ApiProperty({
    type: Number,
    required: true,
    nullable: false,
    default: 20,
  })
  @IsNotEmpty()
  @IsNumberString()
  limit: number;

  @ApiProperty({
    type: Number,
    required: true,
    nullable: false,
    default: 1,
  })
  @IsNotEmpty()
  @IsNumberString()
  skip: number;

  @ApiProperty({
    type: String,
    required: false,
    nullable: false,
  })
  @IsOptional()
  @IsString()
  search: string;

  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
    enum: ['ASC', 'DESC'],
    default: 'ASC',
  })
  @IsNotEmpty()
  @IsString()
  orderDirection: string;

  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
    enum: ['id', 'name', 'updatedAt', 'createdAt'],
    default: 'id',
  })
  @IsNotEmpty()
  @IsString()
  orderBy: string;

  @ApiProperty({
    type: Number,
    required: false,
    nullable: false,
  })
  @IsNotEmpty()
  @IsNumber()
  regionId: number;

  @ApiProperty({
    type: Number,
    required: false,
    nullable: false,
  })
  @IsNotEmpty()
  @IsNumber()
  statusId: number;

  @ApiProperty({
    type: Number,
    required: false,
    nullable: false,
  })
  @IsNotEmpty()
  @IsNumber()
  clientId: number;
}
