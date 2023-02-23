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
import { CityService } from './city.service';
import { CityDto } from './entities/city.dto';

@Controller('cities')
export class CityController {
  constructor(private readonly service: CityService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param() id: number, @Req() req: Request) {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() city: CityDto) {
    return this.service.create(city);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() city: CityDto) {
    return this.service.update(id, city);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
