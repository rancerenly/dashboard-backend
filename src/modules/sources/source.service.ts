import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SourceDto } from './entities/source.dto';
import { Source } from './entities/source.entity';
@Injectable()
export class SourceService {
  constructor(
    @InjectRepository(Source)
    private repository: Repository<Source>,
  ) {}
  findAll(): Promise<Source[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Source> {
    return this.repository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async update(id: number, source: SourceDto) {
    await this.repository.update(id, source);
  }

  async create(source: SourceDto): Promise<SourceDto> {
    return this.repository.save(source);
  }
}
