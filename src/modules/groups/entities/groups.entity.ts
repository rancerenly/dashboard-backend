import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GroupBranch } from '../../group-branch/entities/group-branch.entity';
import { Lead } from '../../leads/entities/lead.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  group: string;
  @ManyToOne(() => GroupBranch, (groupbranch) => groupbranch.groups)
  groupbranch: GroupBranch;
  @OneToMany(() => Lead, (lead) => lead.group)
  leads: Lead[];
}
