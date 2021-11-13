import { Injectable } from '@nestjs/common';
import { Subject } from '../subject.entity';
import { SubjectsRepository } from '../repository/subjects.repository';
import { BAD_REQUEST } from 'src/shared/error-messages';
import { FindSubjectDto } from '../dto/find-subject-code.dto';

@Injectable()
export class FindSubjectService {
  constructor(private subjectsRepository: SubjectsRepository) {}

  async findSubject(findSubjectDto: FindSubjectDto): Promise<Subject> {
    try {
      const { code } = findSubjectDto;
      const found = await this.subjectsRepository.findSubjectByCode(code);
      if (!found) {
        throw new Error('Not found');
      }

      await this.subjectsRepository.findSubjectByCode(code);
      return found;
    } catch (error) {
      return BAD_REQUEST(error?.message);
    }
  }
}
