import { Module } from '@nestjs/common';
import { LeadController } from './lead.controller';
import { LeadService } from './lead.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lead } from './entities/lead.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lead])],
  providers: [LeadService],
  controllers: [LeadController],
})
export class LeadsModule {}
