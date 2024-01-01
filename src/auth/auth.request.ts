import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class VerifyTokenBody {
  @ApiProperty()
  @IsNotEmpty()
  userId: string;
}
