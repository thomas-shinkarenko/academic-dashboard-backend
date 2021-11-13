import { Injectable } from '@nestjs/common';
import { BAD_REQUEST } from 'src/shared/error-messages';
import { SubjectsRepository } from '../repository/subjects.repository';
import { Subject } from '../subject.entity';

@Injectable()
export class DeleteSubjectService {
  constructor(private subjectsRepository: SubjectsRepository) {}

  async deleteSubject(code: string): Promise<any> {
    try {
      const result = await this.subjectsRepository.deleteSubject(code);

      if (result.affected === 0) {
        throw new Error('Subject does not exist');
      }
    } catch (error) {
      return BAD_REQUEST(error?.message);
    }
  }
}
