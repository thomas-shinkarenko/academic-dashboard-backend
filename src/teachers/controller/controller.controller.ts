import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTeacherDto } from '../dto/create-teacher.dto';
import { CreateTeacherService } from '../services/create-teacher';
import { Teacher } from '../teacher.entity';

@Controller('teachers')
@UseGuards(AuthGuard())
export class ControllerController {
  constructor(private createTeacherService: CreateTeacherService) {}

  @Post()
  createTeacher(@Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    console.log(createTeacherDto);
    return this.createTeacherService.createTeacher(createTeacherDto);
  }
}
