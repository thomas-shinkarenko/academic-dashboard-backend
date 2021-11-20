import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { SubjectsController } from './controller/subjects.controller';
import { SubjectsRepository } from './repository/subjects.repository';
import { CreateSubjectService } from './services/create-subject';
import { DeleteSubjectService } from './services/delete-subject';
import { FindSubjectService } from './services/find-subject';
import { ListSubjectsService } from './services/list-subject';
import { SubjectsService } from './services/subjects.service';
import { UpdateSubjectService } from './services/update-subject';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectsRepository]), AuthModule],
  controllers: [SubjectsController],
  providers: [
    SubjectsService,
    CreateSubjectService,
    ListSubjectsService,
    FindSubjectService,
    DeleteSubjectService,
    UpdateSubjectService,
  ],
})
export class SubjectsModule {}
