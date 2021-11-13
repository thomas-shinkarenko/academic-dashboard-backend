import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateSubjectDto } from '../dto/create-subject.dto';
import { Subject } from '../subject.entity';
import { CreateSubjectService } from '../services/create-subject';
import { SubjectsService } from '../services/subjects.service';
import { ListSubjectsService } from '../services/list-subject';
import { ListSubjectsDto } from '../dto/list-subject-code.dto';
import { FindSubjectService } from '../services/find-subject';
import { FindSubjectDto } from '../dto/find-subject-code.dto';
import { DeleteSubjectService } from '../services/delete-subject';
import { UpdateSubjectDto } from '../dto/update-subject.dto';
import { UpdateSubjectService } from '../services/update-subject';

@Controller('subjects')
export class SubjectsController {
  constructor(
    private subjectService: SubjectsService,
    private createSubjectService: CreateSubjectService,
    private listSubjectsService: ListSubjectsService,
    private findSubjectService: FindSubjectService,
    private deleteSubjectService: DeleteSubjectService,
    private updateSubjectService: UpdateSubjectService,
  ) {}

  @Post()
  createSubject(@Body() createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return this.createSubjectService.createSubject(createSubjectDto);
  }

  @Get()
  listSubjects(@Query() filterDto: ListSubjectsDto): Promise<Subject[]> {
    return this.listSubjectsService.listSubjects(filterDto);
  }

  @Get('/:code')
  findSubjects(@Param() findSubjectDto: FindSubjectDto): Promise<Subject> {
    return this.findSubjectService.findSubject(findSubjectDto);
  }

  @Delete('/:code')
  deleteSubject(@Param() code: string): Promise<void> {
    return this.deleteSubjectService.deleteSubject(code);
  }

  @Put('/:code')
  updateSubject(
    @Param() code: string,
    @Body() updateSubject: UpdateSubjectDto,
  ): Promise<UpdateSubjectDto> {
    console.log('controller', code, updateSubject);
    return this.updateSubjectService.updateSubject(code, updateSubject);
  }
}
