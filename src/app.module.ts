import { Module } from '@nestjs/common';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [StudentsModule, TeachersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
