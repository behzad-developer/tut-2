import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Min, Max } from 'class-validator';

export class CreateUsersDto {
  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    type: Number,
    required: true,
    nullable: false,
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(61000000)
  @Max(65999999)
  phonenumber: number;

  @ApiProperty({
    type: Number,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsNumber()
  typeId: number;

  @ApiProperty({
    type: [Number],
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsNumber()
  roleIds: number[];

  @ApiProperty({
    type: [Number],
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsNumber()
  permissionIds: number[];
}
