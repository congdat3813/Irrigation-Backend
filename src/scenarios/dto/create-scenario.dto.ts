import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateScenarioDto {
  @ApiProperty({
    description: 'The name of the scenario',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The ID of the model associated with the scenario',
    type: Number,
  })
  @IsNotEmpty()
  @IsInt()
  modelId: number;

  @ApiProperty({
    description: 'The ID of the farm associated with the scenario',
    type: Number,
  })
  @IsNotEmpty()
  @IsInt()
  farmId: number;

  @ApiProperty({
    description: 'The time of the scenario',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  time: string;

  @ApiProperty({
    description: 'The duration of the scenario in minutes',
    type: Number,
  })
  @IsNotEmpty()
  @IsInt()
  duration: number;

  @ApiProperty({
    description: 'The amount of water for the scenario in liters',
    type: Number,
  })
  @IsNotEmpty()
  @IsInt()
  amount: number;
}
