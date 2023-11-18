import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({
    type: String,
    nullable: false,
    required: true,
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
}
