import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CityDto } from './entities/city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private repository: Repository<City>,
  ) {}
  findAll(): Promise<City[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<City> {
    return this.repository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async update(id: number, city: CityDto) {
    await this.repository.update(id, city);
  }

  async create(city: CityDto): Promise<CityDto> {
    return this.repository.save(city);
  }
}
