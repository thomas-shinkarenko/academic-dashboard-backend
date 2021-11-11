import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { Subject } from './subject.entity';
import { SubjectsRepository } from './subjects.repository';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(SubjectsRepository)
    private subjectsRepository: SubjectsRepository,
  ) {}

  createSubject(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return this.subjectsRepository.createSubject(createSubjectDto);
  }
}
