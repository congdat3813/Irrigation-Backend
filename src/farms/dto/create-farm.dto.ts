import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFarmDto {
  @ApiProperty({ example: 'Farm Name', description: 'The name of the farm' })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Farm Description',
    description: 'The description of the farm',
  })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({
    example: 'Farm Address',
    description: 'The address of the farm',
  })
  @IsOptional()
  @IsString()
  address: string;

  @ApiProperty({
    example: 'Farm Image URL',
    description: 'The image URL of the farm',
  })
  @IsOptional()
  @IsString()
  image: string;

  @ApiProperty({
    example: 'Cultivar ID',
    description: 'The ID of the cultivar',
  })
  @IsString()
  cultivarId: string;

  @ApiProperty({ example: 'User ID', description: 'The ID of the user' })
  @IsString()
  userId: string;

  @ApiProperty({ example: 'Model ID', description: 'The ID of the model' })
  @IsString()
  modelId: string;
}
