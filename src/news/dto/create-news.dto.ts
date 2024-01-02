import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNewsDto {
  @ApiProperty({
    description: 'The title of the news',
    type: String,
    example: 'Breaking News',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'The image URL of the news',
    type: String,
    example: 'https://example.com/news/image.jpg',
  })
  @IsString()
  image: string;

  @ApiProperty({
    description: 'The link URL of the news',
    type: String,
    example: 'https://example.com/news',
  })
  @IsString()
  link: string;

  @ApiProperty({
    description: 'The category of the news',
    type: String,
    example: 'Sports',
  })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({
    description: 'The content of the news',
    type: String,
    example: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  })
  @IsString()
  @IsNotEmpty()
  content: string;
}
