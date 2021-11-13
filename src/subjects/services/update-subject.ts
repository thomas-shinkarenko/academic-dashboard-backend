import { Injectable } from '@nestjs/common';
import { UpdateSubjectDto } from '../dto/update-subject.dto';
import { SubjectsRepository } from '../repository/subjects.repository';

@Injectable()
export class UpdateSubjectService {
  constructor(private subjectsRepository: SubjectsRepository) {}

  async updateSubject(
    code: string,
    updateSubject: UpdateSubjectDto,
  ): Promise<any> {
    try {
      const found = await this.subjectsRepository.findSubjectByCode(code);
      console.log('try update', found);
      // if (!found) {
      //   throw new Error('KKKKKKKKKKK deu nao');
      // }

      // await this.subjectsRepository.updateSubject(updateSubject);
      // return;
    } catch (error) {
      throw new Error(error);
    }
  }
}
