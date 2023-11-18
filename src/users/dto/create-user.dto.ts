import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
    example: 'Behzad',
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
    example: 'Yakubov',
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    type: String,
    required: true,
    nullable: false,
    example: 'passwd',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    type: Number,
    required: true,
    nullable: false,
    example: 65250795,
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
}
