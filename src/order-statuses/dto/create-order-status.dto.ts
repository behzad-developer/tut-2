import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderStatusDto {
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
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  slug: string;

  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  color: string;

  @ApiProperty({
    type: Boolean,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsBoolean()
  isDefault: boolean;
}
