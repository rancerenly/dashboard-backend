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
import { RecordDateService } from './record-date.service';
import { RecordDateDto } from './entities/record-date.dto';

@Controller('dates')
export class RecordDateController {
  constructor(private readonly service: RecordDateService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param() id: number, @Req() req: Request) {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() recordDate: RecordDateDto) {
    return this.service.create(recordDate);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() recordDate: RecordDateDto) {
    return this.service.update(id, recordDate);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
