import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lead } from '../../leads/entities/lead.entity';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  subscription: string;
  @Column()
  description: string;
  @Column()
  cost: number;
  @Column()
  discount: number;
  @OneToMany(() => Lead, (lead) => lead.visit)
  leads: Lead[];
}
