import { Injectable } from '@nestjs/common';
import { FindSubjectDto } from '../dto/find-subject-code.dto';
import { UpdateSubjectDto } from '../dto/update-subject.dto';
import { SubjectsRepository } from '../repository/subjects.repository';

@Injectable()
export class UpdateSubjectService {
  constructor(private subjectsRepository: SubjectsRepository) {}

  async updateSubject(
    findSubjectDto: FindSubjectDto,
    updateSubject: UpdateSubjectDto,
  ): Promise<any> {
    try {
      const subject = await this.subjectsRepository.findSubjectByCode(
        findSubjectDto.code,
      );
      const subjectExist = await this.subjectsRepository.findSubjectByCode(
        updateSubject.code,
      );

      console.log('aaaaaaa', subject.code);
      console.log('exists', subjectExist);

      if (!subject) {
        throw new Error('Not found');
      }
      if (subjectExist) {
        throw new Error('Subject already exists');
      }

      subject.code = updateSubject.code;
      subject.name = updateSubject.name;
      subject.course = updateSubject.course;

      console.log('after put', subject);

      await this.subjectsRepository.updateSubject(subject);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }
}
