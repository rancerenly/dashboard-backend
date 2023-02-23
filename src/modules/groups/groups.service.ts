import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './entities/groups.entity';
import { GroupDto } from './entities/groups.dto';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private repository: Repository<Group>,
  ) {}
  findAll(): Promise<Group[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Group> {
    return this.repository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async update(id: number, group: GroupDto) {
    await this.repository.update(id, group);
  }

  async create(group: GroupDto): Promise<GroupDto> {
    return this.repository.save(group);
  }
}
