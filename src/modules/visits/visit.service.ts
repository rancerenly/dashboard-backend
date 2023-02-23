import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visit } from './entities/visit.entity';
import { VisitDto } from './entities/visit.dto';

@Injectable()
export class VisitService {
  constructor(
    @InjectRepository(Visit)
    private repository: Repository<Visit>,
  ) {}
  findAll(): Promise<Visit[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Visit> {
    return this.repository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async update(id: number, visit: VisitDto) {
    await this.repository.update(id, visit);
  }

  async create(visit: VisitDto): Promise<VisitDto> {
    return this.repository.save(visit);
  }
}
