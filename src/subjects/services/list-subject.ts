import { Injectable } from '@nestjs/common';
import { Subject } from '../subject.entity';
import { SubjectsRepository } from '../repository/subjects.repository';
import { BAD_REQUEST } from '../../shared/error-messages';
import { ListSubjectsDto } from '../dto/list-subject-code.dto';

@Injectable()
export class ListSubjectsService {
  constructor(private subjectsRepository: SubjectsRepository) {}

  async listSubjects(listSubjectsDto: ListSubjectsDto): Promise<Subject[]> {
    try {
      const found = await this.subjectsRepository.listSubjects(listSubjectsDto);
      if (found.length === 0) {
        throw new Error('Not found');
      }

      return found;
    } catch (error) {
      return BAD_REQUEST(error?.message);
    }
  }
}
