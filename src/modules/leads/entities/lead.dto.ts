import { Source } from '../../sources/entities/source.entity';
import { User } from '../../users/entities/user.entity';
import { City } from '../../cities/entities/city.entity';
import { Group } from '../../groups/entities/groups.entity';
import { Visit } from '../../visits/entities/visit.entity';
import { Subscription } from '../../subscriptions/entities/subscription.entity';
import { RecordDate } from '../../record-dates/entities/record-date.entity';

export class LeadDto {
  recordDate: Date;
  saleDate: Date;
  comment: string;
  phoneNumber: string;
  isArrival: boolean;
  subsAmount: number;
  isOneTimePurchase: boolean;
  source: Source;
  user: User;
  city: City;
  group: Group;
  visit: Visit;
  subs: Subscription;
  datesTrialLessons: RecordDate;
}
