import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: Number,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty({
    type: Number,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsNumber()
  regoinId: number;

  @ApiProperty({
    type: Boolean,
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsBoolean()
  isDefault: boolean;
}
