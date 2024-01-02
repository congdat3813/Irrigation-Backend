import { ApiProperty } from '@nestjs/swagger';
export class CreateModelDto {
  @ApiProperty({
    description: 'The name of the model',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'The description of the model',
    type: String,
  })
  description: string;

  @ApiProperty({
    description: 'The provider of the model',
    type: String,
  })
  provider: string;
}
