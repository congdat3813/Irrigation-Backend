import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base/base.service';
import { IdPrefix } from 'src/utils';
import { Repository } from 'typeorm';
import { Scenario } from './entities/scenario.entity';

@Injectable()
export class ScenariosService extends BaseService<
  Scenario,
  CreateScenarioDto,
  UpdateScenarioDto
> {
  constructor(
    @InjectRepository(Scenario)
    private readonly scenarioRepository: Repository<Scenario>,
  ) {
    super(scenarioRepository, IdPrefix.SCENARIO);
  }
}
