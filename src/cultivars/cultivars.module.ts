import { Module } from '@nestjs/common';
import { CultivarsService } from './cultivars.service';
import { CultivarsController } from './cultivars.controller';
import { Cultivar } from './entities/cultivar.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cultivar])],
  controllers: [CultivarsController],
  providers: [CultivarsService],
})
export class CultivarsModule {}
