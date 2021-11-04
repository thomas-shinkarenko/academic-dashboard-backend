import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { SubjectsModule } from './subjects/subjects.module';

@Module({
  imports: [StudentsModule, TeachersModule, SubjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
