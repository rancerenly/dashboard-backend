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
import { LeadService } from './lead.service';
import { LeadDto } from './entities/lead.dto';

@Controller('leads')
export class LeadController {
  constructor(private readonly service: LeadService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
  @Get('full')
  findAllData() {
    return this.service.findAllData();
  }

  @Get(':id')
  findById(@Param() id: number, @Req() req: Request) {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() lead: LeadDto) {
    return this.service.create(lead);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() lead: LeadDto) {
    return this.service.update(id, lead);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
