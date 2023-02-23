import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsDate } from 'class-validator';
@Entity()
export class RecordDate {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @IsDate()
  actualDateTL: Date;
  @Column()
  @IsDate()
  dateTLBeforeResubscribe: Date;
  @Column()
  @IsDate()
  dateTLBeforeDoubleResubscribe: Date;
  @Column()
  @IsDate()
  dateVisitingTL: Date;
}
