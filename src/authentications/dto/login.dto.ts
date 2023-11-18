import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    type: Number,
    required: true,
    nullable: false,
    example: 63412114,
  })
  @IsNumber()
  @IsNotEmpty()
  phonenumber: number;

  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
    example: 'Hello123',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
