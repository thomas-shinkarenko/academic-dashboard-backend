import { Body, Controller, Post } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { Subject } from './subject.entity';
import { SubjectsService } from './subjects.service';

@Controller('subjects')
export class SubjectsController {
  constructor(private subjectsService: SubjectsService) {}

  @Post()
  createSubject(@Body() createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return this.subjectsService.createSubject(createSubjectDto);
  }
}
