import { Subject } from '../subject.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateSubjectDto } from '../dto/create-subject.dto';
import { ListSubjectsDto } from '../dto/list-subject-code.dto';
import { UpdateSubjectDto } from '../dto/update-subject.dto';

@EntityRepository(Subject)
export class SubjectsRepository extends Repository<Subject> {
  async createSubject(createSubjectDto: CreateSubjectDto): Promise<void> {
    await this.save(createSubjectDto);
    return;
  }

  async updateSubject(updateSubjectDto: UpdateSubjectDto): Promise<any> {
    console.log('repo', updateSubjectDto);
    const subject = await this.save(updateSubjectDto);
    return subject;
  }

  async deleteSubject(code: string): Promise<any> {
    const deleted = await this.delete(code);
    return deleted;
  }

  async checkSubjectExist(code: string): Promise<any> {
    console.log('aa', code);
    const found = await this.createQueryBuilder('subject')
      .where('subject.code = :code', { code: code })
      .select(['subject.code'])
      .getOne();
    console.log('found', found);
    return found;
  }

  async findSubjectByCode(code: string): Promise<any> {
    console.log(code);
    const found = await this.createQueryBuilder('subject')
      .where('subject.code = :code', { code: code })
      .getOne();
    return found;
  }

  async listSubjects(listSubjectsDto: ListSubjectsDto): Promise<Subject[]> {
    const { code, name, course } = listSubjectsDto;

    const query = this.createQueryBuilder('subject');

    if (code) {
      query
        .andWhere('LOWER(subject.code) = LOWER(:code)', { code: code })
        .select(['subject.code']);
    }
    if (name) {
      query
        .andWhere('LOWER(subject.name) LIKE LOWER(:name)', {
          name: `%${name}%`,
        })
        .select(['subject.name']);
    }
    if (course) {
      query
        .andWhere('LOWER(subject.course) LIKE LOWER(:course)', {
          course: `%${course}%`,
        })
        .select(['subject.course']);
    }

    const list = await query.getMany();
    return list;
  }
}
