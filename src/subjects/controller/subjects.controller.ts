import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSubjectDto } from '../dto/create-subject.dto';
import { Subject } from '../subject.entity';
import { CreateSubjectService } from '../services/create-subject';
import { SubjectsService } from '../services/subjects.service';

@Controller('subjects')
export class SubjectsController {
  constructor(
    private subjectService: SubjectsService,
    private createSubjectService: CreateSubjectService,
  ) {}

  @Post()
  createSubject(@Body() createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return this.createSubjectService.createSubject(createSubjectDto);
  }

  // @Get('/:code')
  // getSubjects(@Param('code') code: string): Promise<Subject> {
  //   return this.findSubjectService.findSubjectByCode(code);
  // }
}
