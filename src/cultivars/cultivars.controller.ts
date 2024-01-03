import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CultivarsService } from './cultivars.service';
import { CreateCultivarDto } from './dto/create-cultivar.dto';
import { UpdateCultivarDto } from './dto/update-cultivar.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cultivars Management')
@Controller('cultivars')
export class CultivarsController {
  constructor(private readonly cultivarsService: CultivarsService) {}

  @Post()
  create(@Body() createCultivarDto: CreateCultivarDto) {
    return this.cultivarsService.create(createCultivarDto);
  }

  @Get()
  findAll() {
    return this.cultivarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cultivarsService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCultivarDto: UpdateCultivarDto,
  ) {
    return this.cultivarsService.update(id, updateCultivarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cultivarsService.deleteById(id);
  }
}
