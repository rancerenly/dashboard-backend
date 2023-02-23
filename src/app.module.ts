import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import environment from './environment';
import { UsersModule } from './modules/users/users.module';
import { DataSource } from 'typeorm';
import { PostsModule } from './modules/posts/posts.module';
import { SourcesModule } from './modules/sources/sources.module';
import { VisitsModule } from './modules/visits/visits.module';
import { CitiesModule } from './modules/cities/cities.module';
import { GroupBranchModule } from './modules/group-branch/group-branch.module';
import { GroupsModule } from './modules/groups/groups.module';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';
import { LeadsModule } from './modules/leads/leads.module';
import { RecordDatesModule } from './modules/record-dates/record-dates.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(environment),
    CitiesModule,
    GroupBranchModule,
    GroupsModule,
    LeadsModule,
    PostsModule,
    RecordDatesModule,
    SourcesModule,
    SubscriptionsModule,
    UsersModule,
    VisitsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
