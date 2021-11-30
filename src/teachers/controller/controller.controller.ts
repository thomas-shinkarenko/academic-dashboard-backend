import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTeacherDto } from '../dto/create-teacher.dto';
import { FindTeacherDtoByRG } from '../dto/find-teacher.dto';
import { ListTeachersDto } from '../dto/list-teacher.dto';
import { UpdateTeacherDto } from '../dto/update-teacher.dto';
import { CreateTeacherService } from '../services/create-teacher';
import { DeleteTeacherService } from '../services/delete-teacher';
import { FindTeacherService } from '../services/find-teacher';
import { ListTeachersService } from '../services/list-teacher';
import { UpdateTeacherService } from '../services/update-teacher';
import { Teacher } from '../teacher.entity';

@Controller('teachers')
@UseGuards(AuthGuard())
export class ControllerController {
  constructor(
    private createTeacherService: CreateTeacherService,
    private listTeacherService: ListTeachersService,
    private findTeacherService: FindTeacherService,
    private updateTeacherService: UpdateTeacherService,
    private deleteTeacherService: DeleteTeacherService,
  ) {}

  @Post()
  createTeacher(@Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    console.log(createTeacherDto);
    return this.createTeacherService.createTeacher(createTeacherDto);
  }

  @Get()
  listTeachers(@Query() listTeachersDto: ListTeachersDto): Promise<Teacher[]> {
    return this.listTeacherService.listTeachers(listTeachersDto);
  }

  @Get('/:document_rg')
  findTeacher(
    @Param() findTeacherDtoByRG: FindTeacherDtoByRG,
  ): Promise<Teacher> {
    console.log(findTeacherDtoByRG);
    return this.findTeacherService.findTeacher(findTeacherDtoByRG);
  }

  @Put('/:document_rg')
  updateTeacher(
    @Param('document_rg') document_rg: string,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ): Promise<Teacher> {
    return this.updateTeacherService.updateTeacher(
      document_rg,
      updateTeacherDto,
    );
  }

  @Delete('/:document_rg')
  deleteTeacher(@Param() document_rg: string): Promise<void> {
    return this.deleteTeacherService.deleteTeacher(document_rg);
  }
}
