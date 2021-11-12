import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubjectDto } from '../dto/create-subject.dto';
import { Subject } from '../subject.entity';
import { SubjectsRepository } from '../repository/subjects.repository';

@Injectable()
export class CreateSubjectService {
  constructor(
    @InjectRepository(SubjectsRepository)
    private subjectsRepository: SubjectsRepository,
  ) {}

  async createSubject(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    const { code } = createSubjectDto;
    if (!this.subjectsRepository.findSubjectByCode(code)) {
      throw new Error('b');
    }

    const subject = new Subject();

    await this.subjectsRepository.save(subject);

    return subject;
  }
}
