import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubscriptionDto } from './entities/subscription.dto';
import { Subscription } from './entities/subscription.entity';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    private repository: Repository<Subscription>,
  ) {}
  findAll(): Promise<Subscription[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Subscription> {
    return this.repository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async update(id: number, subs: SubscriptionDto) {
    await this.repository.update(id, subs);
  }

  async create(subs: SubscriptionDto): Promise<SubscriptionDto> {
    return this.repository.save(subs);
  }
}
