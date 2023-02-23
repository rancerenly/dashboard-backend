import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecordDate } from './entities/record-date.entity';
import { RecordDateDto } from './entities/record-date.dto';

@Injectable()
export class RecordDateService {
  constructor(
    @InjectRepository(RecordDate)
    private repository: Repository<RecordDate>,
  ) {}
  findAll(): Promise<RecordDate[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<RecordDate> {
    return this.repository.findOneById(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async update(id: number, recordDate: RecordDateDto) {
    await this.repository.update(id, recordDate);
  }

  async create(recordDate: RecordDateDto): Promise<RecordDateDto> {
    return this.repository.save(recordDate);
  }
}
