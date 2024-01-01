import { Module } from '@nestjs/common';
import { CultivarsService } from './cultivars.service';
import { CultivarsController } from './cultivars.controller';

@Module({
  controllers: [CultivarsController],
  providers: [CultivarsService]
})
export class CultivarsModule {}
