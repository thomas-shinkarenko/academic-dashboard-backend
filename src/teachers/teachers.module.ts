import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ControllerController } from './controller/teacher.controller';
import { TeachersRepository } from './repository/teachers.repository';
import { CreateTeacherService } from './services/create-teacher';
import { DeleteTeacherService } from './services/delete-teacher';
import { FindTeacherService } from './services/find-teacher';
import { ListTeachersService } from './services/list-teacher';
import { ServicesService } from './services/services.service';
import { UpdateTeacherService } from './services/update-teacher';

@Module({
  imports: [TypeOrmModule.forFeature([TeachersRepository]), AuthModule],
  controllers: [ControllerController],
  providers: [
    ServicesService,
    CreateTeacherService,
    ListTeachersService,
    FindTeacherService,
    UpdateTeacherService,
    DeleteTeacherService,
  ],
})
export class TeachersModule {}
