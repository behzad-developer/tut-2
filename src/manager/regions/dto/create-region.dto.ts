import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRegionDto {
  @ApiProperty({
    type: String,
    nullable: false,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: [Number],
    required: true,
    nullable: false,
  })
  @IsNotEmpty()
  @IsNotEmpty()
  userIds: number[];
}
