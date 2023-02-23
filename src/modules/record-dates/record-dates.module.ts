import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordDate } from './entities/record-date.entity';
import { RecordDateService } from './record-date.service';
import { RecordDateController } from './record-date.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RecordDate])],
  providers: [RecordDateService],
  controllers: [RecordDateController],
})
export class RecordDatesModule {}
