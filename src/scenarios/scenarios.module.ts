import { Module } from '@nestjs/common';
import { ScenariosService } from './scenarios.service';
import { ScenariosController } from './scenarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scenario } from './entities/scenario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Scenario])],
  controllers: [ScenariosController],
  providers: [ScenariosService],
})
export class ScenariosModule {}
