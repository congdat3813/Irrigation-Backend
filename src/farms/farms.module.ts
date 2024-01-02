import { Module } from '@nestjs/common';
import { FarmsService } from './farms.service';
import { FarmsController } from './farms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Farm } from './entities/farm.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Farm])],
  controllers: [FarmsController],
  providers: [FarmsService],
})
export class FarmsModule {}
