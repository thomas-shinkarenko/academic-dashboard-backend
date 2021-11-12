import { Subject } from '../subject.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateSubjectDto } from '../dto/create-subject.dto';
import {
  ConflictException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';

@EntityRepository(Subject)
export class SubjectsRepository extends Repository<Subject> {
  // async createSubject(createSubjectDto: CreateSubjectDto): Promise<Subject> {
  //   const { code, name, course } = createSubjectDto;
  //   const subject = this.create({
  //     code,
  //     name,
  //     course,
  //   });
  //   try {
  //     await this.save(subject);
  //   } catch (error) {
  //     if (error.code === '23505') {
  //       throw new ConflictException('Subject already exists');
  //     } else {
  //       throw new InternalServerErrorException();
  //     }
  //   }
  //   return subject;
  // }
  async findSubjectByCode(code: string): Promise<Subject> {
    const found = await this.findOne({ code });
    Logger.log('teste', found);
    if (!found) {
      throw new Error('sdf');
    }

    return found;
  }
}
