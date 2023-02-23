import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { City } from '../../cities/entities/city.entity';
import { Group } from '../../groups/entities/groups.entity';

@Entity()
export class GroupBranch {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  branch: string;
  @ManyToOne(() => City, (city) => city.groupbranches)
  city: City;
  @OneToMany(() => Group, (group) => group.groupbranch)
  groups: Group[];
}
