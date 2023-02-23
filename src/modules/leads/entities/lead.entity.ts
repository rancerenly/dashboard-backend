import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsDate } from 'class-validator';
import { User } from '../../users/entities/user.entity';
import { Source } from '../../sources/entities/source.entity';
import { City } from '../../cities/entities/city.entity';
import { Group } from '../../groups/entities/groups.entity';
import { Visit } from '../../visits/entities/visit.entity';
import { Subscription } from '../../subscriptions/entities/subscription.entity';
import { RecordDate } from '../../record-dates/entities/record-date.entity';

@Entity()
export class Lead {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @IsDate()
  recordDate: Date;
  @Column()
  @IsDate()
  saleDate: Date;
  @Column()
  comment: string;
  @Column()
  phoneNumber: string;
  @Column()
  isArrival: boolean;
  @Column()
  subsAmount: number;
  @Column()
  isOneTimePurchase: boolean;

  @ManyToOne(() => Source, (source) => source.leads)
  source: Source;
  @ManyToOne(() => User, (user) => user.leads)
  user: User;
  @ManyToOne(() => City, (city) => city.leads)
  city: City;
  @ManyToOne(() => Group, (group) => group.leads)
  group: Group;
  @ManyToOne(() => Visit, (visit) => visit.leads)
  visit: Visit;
  @ManyToOne(() => Subscription, (subs) => subs.leads)
  subs: Subscription;
  @OneToOne(() => RecordDate)
  @JoinColumn()
  datesTrialLessons: RecordDate;
}
