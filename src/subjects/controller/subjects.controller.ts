import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateSubjectDto } from '../dto/create-subject.dto';
import { Subject } from '../subject.entity';
import { CreateSubjectService } from '../services/create-subject';
import { SubjectsService } from '../services/subjects.service';
import { ListSubjectsService } from '../services/list-subject';
import { ListSubjectsDto } from '../dto/list-subject-code.dto';

@Controller('subjects')
export class SubjectsController {
  constructor(
    private subjectService: SubjectsService,
    private createSubjectService: CreateSubjectService,
    private listSubjectsService: ListSubjectsService,
  ) {}

  @Post()
  createSubject(@Body() createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return this.createSubjectService.createSubject(createSubjectDto);
  }

  @Get()
  listSubjects(@Query() filterDto: ListSubjectsDto): Promise<Subject[]> {
    return this.listSubjectsService.listSubjects(filterDto);
  }

  // @Get('/:code')
  // getSubjects(@Param('code') code: string): Promise<Subject> {
  //   return this.findSubjectService.findSubjectByCode(code);
  // }
}
