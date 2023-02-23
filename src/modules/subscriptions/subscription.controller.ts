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
import { SubscriptionDto } from './entities/subscription.dto';
import { SubscriptionService } from './subscription.service';

@Controller('subs')
export class SubscriptionController {
  constructor(private readonly service: SubscriptionService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param() id: number, @Req() req: Request) {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() subs: SubscriptionDto) {
    return this.service.create(subs);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() subs: SubscriptionDto) {
    return this.service.update(id, subs);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
