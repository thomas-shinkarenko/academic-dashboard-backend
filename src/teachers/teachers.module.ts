import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ControllerController } from './controller/controller.controller';
import { TeachersRepository } from './repository/teachers.repository';
import { CreateTeacherService } from './services/create-teacher';
import { ServicesService } from './services/services.service';

@Module({
  imports: [TypeOrmModule.forFeature([TeachersRepository]), AuthModule],
  controllers: [ControllerController],
  providers: [ServicesService, CreateTeacherService],
})
export class TeachersModule {}
