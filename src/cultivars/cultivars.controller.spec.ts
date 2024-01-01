import { Test, TestingModule } from '@nestjs/testing';
import { CultivarsController } from './cultivars.controller';
import { CultivarsService } from './cultivars.service';

describe('CultivarsController', () => {
  let controller: CultivarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CultivarsController],
      providers: [CultivarsService],
    }).compile();

    controller = module.get<CultivarsController>(CultivarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
