import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectsController } from './controller/subjects.controller';
import { SubjectsRepository } from './repository/subjects.repository';
import { CreateSubjectService } from './services/create-subject';
import { SubjectsService } from './services/subjects.service';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectsRepository])],
  controllers: [SubjectsController],
  providers: [SubjectsService, CreateSubjectService],
})
export class SubjectsModule {}
