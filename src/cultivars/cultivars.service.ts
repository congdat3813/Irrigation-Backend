import { Injectable } from '@nestjs/common';
import { CreateCultivarDto } from './dto/create-cultivar.dto';
import { UpdateCultivarDto } from './dto/update-cultivar.dto';

@Injectable()
export class CultivarsService {
  create(createCultivarDto: CreateCultivarDto) {
    return 'This action adds a new cultivar';
  }

  findAll() {
    return `This action returns all cultivars`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cultivar`;
  }

  update(id: number, updateCultivarDto: UpdateCultivarDto) {
    return `This action updates a #${id} cultivar`;
  }

  remove(id: number) {
    return `This action removes a #${id} cultivar`;
  }
}
