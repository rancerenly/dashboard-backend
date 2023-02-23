import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupBranchService } from './group-branch.service';
import { GroupBranchController } from './group-branch.controller';
import { GroupBranch } from './entities/group-branch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GroupBranch])],
  providers: [GroupBranchService],
  controllers: [GroupBranchController],
})
export class GroupBranchModule {}
