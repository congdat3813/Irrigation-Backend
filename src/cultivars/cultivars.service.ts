import { Injectable } from '@nestjs/common';
import { CreateCultivarDto } from './dto/create-cultivar.dto';
import { UpdateCultivarDto } from './dto/update-cultivar.dto';
import { Cultivar } from './entities/cultivar.entity';
import { BaseService } from 'src/base/base.service';
import { IdPrefix } from 'src/utils';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CultivarsService extends BaseService<
  Cultivar,
  CreateCultivarDto,
  UpdateCultivarDto
> {
  constructor(
    @InjectRepository(Cultivar)
    private readonly cultivarRepository: Repository<Cultivar>,
  ) {
    super(cultivarRepository, IdPrefix.CULTIVAR);
  }
}
