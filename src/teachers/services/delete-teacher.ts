import { Injectable } from '@nestjs/common';
import { BAD_REQUEST } from 'src/shared/error-messages';
import { TeachersRepository } from '../repository/teachers.repository';

@Injectable()
export class DeleteTeacherService {
  constructor(private teachersRepository: TeachersRepository) {}

  async deleteTeacher(document_rg: string): Promise<void> {
    try {
      const result = await this.teachersRepository.deleteTeacher(document_rg);

      if (result.affected === 0) {
        throw new Error('Professor não encontrado');
      }
      return;
    } catch (error) {
      return BAD_REQUEST(error?.message);
    }
  }
}
