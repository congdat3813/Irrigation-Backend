import { ApiProperty } from '@nestjs/swagger';
export class CreateCultivarDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;
}
