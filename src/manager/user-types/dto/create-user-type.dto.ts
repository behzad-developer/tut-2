import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserTypeDto {
  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    nullable: false,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  slug: string;

  @ApiProperty({
    type: Number,
    nullable: false,
    required: true,
  })
  @IsNotEmpty()
  @IsNumber()
  cost: number;

  @ApiProperty({
    type: Boolean,
    nullable: false,
    required: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  isDefault: boolean;
}
