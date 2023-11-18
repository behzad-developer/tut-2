import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class UserQueryDto {
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
    type: Number,
    required: false,
    nullable: false,
  })
  @IsNotEmpty()
  @IsNumber()
  typeId: number;

  @ApiProperty({
    type: String,
    required: false,
    nullable: false,
    enum: ['active', 'deactive', 'blocked'],
  })
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty({
    type: Number,
    required: false,
    nullable: false,
  })
  @IsNotEmpty()
  @IsNumber()
  regionId: number;

  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
    enum: ['id', 'firstName', 'lastName'],
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
  roleId: number;

  @ApiProperty({
    type: Number,
    required: false,
    nullable: false,
  })
  @IsNotEmpty()
  @IsNumber()
  permissionId: number;
}
