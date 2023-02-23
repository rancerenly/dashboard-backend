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
import { GroupsService } from './groups.service';
import { GroupDto } from './entities/groups.dto';

@Controller('groups')
export class GroupsController {
  constructor(private readonly service: GroupsService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param() id: number, @Req() req: Request) {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() group: GroupDto) {
    return this.service.create(group);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() group: GroupDto) {
    return this.service.update(id, group);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
