import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { VisitService } from './visit.service';
import { VisitDto } from './entities/visit.dto';

@Controller('visits')
export class VisitController {
  constructor(private readonly service: VisitService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param() id: number, @Req() req: Request) {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() visit: VisitDto) {
    return this.service.create(visit);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() visit: VisitDto) {
    return this.service.update(id, visit);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
