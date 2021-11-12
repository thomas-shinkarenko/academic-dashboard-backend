import { Injectable } from '@nestjs/common';
import { Subject } from '../subject.entity';
import { SubjectsRepository } from '../repository/subjects.repository';
import { BAD_REQUEST } from 'src/shared/error-messages';
import { ListSubjectsDto } from '../dto/list-subject-code.dto';

@Injectable()
export class ListSubjectsService {
  constructor(private subjectsRepository: SubjectsRepository) {}

  async listSubjects(listSubjectsDto: ListSubjectsDto): Promise<Subject[]> {
    try {
      const found = await this.subjectsRepository.listSubjects(listSubjectsDto);
      console.log(found);
      if (!found) {
        throw new Error('fodase');
      }

      return found;
    } catch (error) {
      return BAD_REQUEST(error?.message);
    }
  }
}
