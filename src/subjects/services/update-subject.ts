import { Injectable } from '@nestjs/common';
import { FindSubjectDto } from '../dto/find-subject-code.dto';
import { UpdateSubjectDto } from '../dto/update-subject.dto';
import { SubjectsRepository } from '../repository/subjects.repository';

@Injectable()
export class UpdateSubjectService {
  constructor(private subjectsRepository: SubjectsRepository) {}

  async updateSubject(
    code: string,
    updateSubject: UpdateSubjectDto,
  ): Promise<void> {
    try {
      const subject = await this.subjectsRepository.findSubjectByCode(code);

      if (!subject) {
        throw new Error('Not found');
      }

      const subjectExist = await this.subjectsRepository.findSubjectByCode(
        updateSubject.code,
      );

      if (subjectExist) {
        throw new Error('Subject already exists');
      }

      subject.code = updateSubject.code;
      subject.name = updateSubject.name;
      subject.course = updateSubject.course;

      await this.subjectsRepository.updateSubject(subject);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }
}
