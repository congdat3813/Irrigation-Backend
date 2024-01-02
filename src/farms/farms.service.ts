import { Injectable } from '@nestjs/common';
import { CreateFarmDto } from './dto/create-farm.dto';
import { UpdateFarmDto } from './dto/update-farm.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base/base.service';
import { IdPrefix } from 'src/utils';
import { Repository } from 'typeorm';
import { Farm } from './entities/farm.entity';

@Injectable()
export class FarmsService extends BaseService<
  Farm,
  CreateFarmDto,
  UpdateFarmDto
> {
  constructor(
    @InjectRepository(Farm)
    private readonly farmRepository: Repository<Farm>,
  ) {
    super(farmRepository, IdPrefix.FARM);
  }
}
