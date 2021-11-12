import { Subject } from '../subject.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateSubjectDto } from '../dto/create-subject.dto';
import { ListSubjectsDto } from '../dto/list-subject-code.dto';

@EntityRepository(Subject)
export class SubjectsRepository extends Repository<Subject> {
  async createSubject(createSubjectDto: CreateSubjectDto): Promise<void> {
    await this.save(createSubjectDto);
    return;
  }

  async findSubjectByCode(code: string): Promise<CreateSubjectDto> {
    const found = await this.createQueryBuilder('subject')
      .where('subject.code = :code', { code: code })
      .select(['subject.code'])
      .getOne();
    return found;
  }

  async listSubjects(listSubjectsDto: ListSubjectsDto): Promise<Subject[]> {
    const { code, name, course } = listSubjectsDto;

    const query = this.createQueryBuilder('subject');

    if (code) {
      query.andWhere('subject.code = :code', { code: code });
    }
    if (name) {
      query.andWhere('subject.name = :name', { name: name });
    }
    if (course) {
      query.andWhere('subject.course = :course', { course: course });
    }

    const list = await query.getMany();
    console.log(list);
    return list;
  }
}
