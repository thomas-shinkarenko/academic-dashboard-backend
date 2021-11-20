import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from '../dto/create-subject.dto';
import { Subject } from '../subject.entity';
import { SubjectsRepository } from '../repository/subjects.repository';
import { BAD_REQUEST } from '../../shared/error-messages';

@Injectable()
export class CreateSubjectService {
  constructor(private subjectsRepository: SubjectsRepository) {}

  async createSubject(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    try {
      const { code } = createSubjectDto;
      const found = await this.subjectsRepository.checkSubjectExist(code);
      if (found) {
        throw new Error('Subject already exists');
      }

      await this.subjectsRepository.createSubject(createSubjectDto);
      return;
    } catch (error) {
      return BAD_REQUEST(error?.message);
    }
  }
}
