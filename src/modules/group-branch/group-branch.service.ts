import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupBranch } from './entities/group-branch.entity';
import { GroupBranchDto } from './entities/group-branch.dto';

@Injectable()
export class GroupBranchService {
  constructor(
    @InjectRepository(GroupBranch)
    private repository: Repository<GroupBranch>,
  ) {}
  findAll(): Promise<GroupBranch[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<GroupBranch> {
    return this.repository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async create(groupbranch: GroupBranchDto): Promise<GroupBranchDto> {
    return this.repository.save(groupbranch);
  }
}
