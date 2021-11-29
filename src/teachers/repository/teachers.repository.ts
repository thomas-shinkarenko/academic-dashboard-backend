import { EntityRepository, Repository } from 'typeorm';
import { CreateTeacherDto } from '../dto/create-teacher.dto';
import { Teacher } from '../teacher.entity';

@EntityRepository(Teacher)
export class TeachersRepository extends Repository<Teacher> {
  async createTeacher(createTeacher: CreateTeacherDto): Promise<Teacher> {
    return await this.save(createTeacher);
  }

  async findTeacherById(id: number): Promise<Teacher> {
    const found = await this.createQueryBuilder('teacher')
      .where('teacher.id = :id', { id: id })
      .getOne();

    return found;
  }

  async checkTeacherExists(
    document_rg: string,
  ): Promise<{ document_rg: string }> {
    const found = await this.createQueryBuilder('teacher')
      .where('teacher.document_rg = :document_rg', { document_rg: document_rg })
      .select(['teacher.document_rg'])
      .getOne();
    console.log('foun', found);
    return found;
  }
}
