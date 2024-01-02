import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base/base.service';
import { IdPrefix } from 'src/utils';
import { Repository } from 'typeorm';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService extends BaseService<
  News,
  CreateNewsDto,
  UpdateNewsDto
> {
  constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>,
  ) {
    super(newsRepository, IdPrefix.NEWS);
  }
}
