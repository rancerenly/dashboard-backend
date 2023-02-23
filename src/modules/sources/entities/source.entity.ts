import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lead } from "../../leads/entities/lead.entity";

@Entity()
export class Source {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  source: string;
  @OneToMany(() => Lead, (lead) => lead.source)
  leads: Lead[];
}
