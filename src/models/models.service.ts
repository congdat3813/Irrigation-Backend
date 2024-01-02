import { Injectable } from '@nestjs/common';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { BaseService } from 'src/base/base.service';
import { Model } from './entities/model.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IdPrefix } from 'src/utils';

@Injectable()
export class ModelsService extends BaseService<
  Model,
  CreateModelDto,
  UpdateModelDto
> {
  constructor(
    @InjectRepository(Model)
    private readonly modelRepository: Repository<Model>,
  ) {
    super(modelRepository, IdPrefix.MODEL);
  }
}
