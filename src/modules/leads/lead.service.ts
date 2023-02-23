import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lead } from '../Leads/entities/Lead.entity';
import { Repository } from 'typeorm';
import { LeadDto } from '../Leads/entities/Lead.dto';

@Injectable()
export class LeadService {
  constructor(
    @InjectRepository(Lead)
    private repository: Repository<Lead>,
  ) {}
  findAll(): Promise<Lead[]> {
    return this.repository.find();
  }
  findAllData(): Promise<Lead[]> {
    return this.repository.find({
      relations: {
        source: true,
        user: true,
        city: true,
        group: true,
        visit: true,
        subs: true,
        datesTrialLessons: true,
      },
    });
  }

  findOne(id: number): Promise<Lead> {
    console.log(id);
    return this.repository.findOneById(id);
  }

  findOneFull(id: number): Promise<Lead> {
    return this.repository.findOne({
      where: {
        id: id,
      },
      relations: {
        source: true,
        user: true,
        city: true,
        group: true,
        visit: true,
        subs: true,
        datesTrialLessons: true,
      },
    });
  }
  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async update(id: number, lead: LeadDto) {
    await this.repository.update(id, lead);
  }

  async create(lead: LeadDto): Promise<LeadDto> {
    return this.repository.save(lead);
  }
}
