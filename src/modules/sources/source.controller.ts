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
import { SourceService } from './source.service';
import { SourceDto } from './entities/source.dto';
@Controller('sources')
export class SourceController {
  constructor(private readonly service: SourceService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param() id: number, @Req() req: Request) {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() source: SourceDto) {
    return this.service.create(source);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() source: SourceDto) {
    return this.service.update(id, source);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
