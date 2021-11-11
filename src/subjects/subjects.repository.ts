import { Subject } from './subject.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateSubjectDto } from './dto/create-subject.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(Subject)
export class SubjectsRepository extends Repository<Subject> {
  async createSubject(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    const { code, name, course } = createSubjectDto;

    const subject = this.create({
      code,
      name,
      course,
    });

    try {
      await this.save(subject);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Subject already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }

    return subject;
  }
}
