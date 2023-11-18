import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class UserTypeQueryDto {
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
    enum: ['id', 'name'],
    default: 'id',
  })
  @IsNotEmpty()
  @IsString()
  orderBy: string;
}
