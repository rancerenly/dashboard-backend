import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GroupBranch } from '../../group-branch/entities/group-branch.entity';
import { Lead } from '../../leads/entities/lead.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  city: string;
  @Column()
  code: string;

  @OneToMany(() => Lead, (lead) => lead.city)
  leads: Lead[];

  @OneToMany(() => GroupBranch, (groupbranch) => groupbranch.city)
  groupbranches: GroupBranch[];
}
