import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lead } from '../../leads/entities/lead.entity';

@Entity()
export class Visit {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  status: string;
  @OneToMany(() => Lead, (lead) => lead.visit)
  leads: Lead[];
}
