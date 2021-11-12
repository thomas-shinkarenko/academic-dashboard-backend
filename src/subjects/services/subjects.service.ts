import { Injectable } from '@nestjs/common';
import { SubjectsRepository } from '../repository/subjects.repository';

@Injectable()
export class SubjectsService {
  constructor(private subjectsRepository: SubjectsRepository) {}

  // createSubject(createSubjectDto: CreateSubjectDto): Promise<Subject> {
  //   return this.subjectsRepository.createSubject(createSubjectDto);
  // }
}
