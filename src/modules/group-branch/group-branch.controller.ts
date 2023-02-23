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
import { GroupBranchService } from './group-branch.service';
import { GroupBranchDto } from './entities/group-branch.dto';

@Controller('groupbranches')
export class GroupBranchController {
  constructor(private readonly service: GroupBranchService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param() id: number, @Req() req: Request) {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() groupbranch: GroupBranchDto) {
    return this.service.create(groupbranch);
  }
}
