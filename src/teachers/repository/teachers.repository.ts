import { EntityRepository, Repository } from 'typeorm';
import { CreateTeacherDto } from '../dto/create-teacher.dto';
import { ListTeachersDto } from '../dto/list-teacher.dto';
import { UpdateTeacherDto } from '../dto/update-teacher.dto';
import { Teacher } from '../teacher.entity';

@EntityRepository(Teacher)
export class TeachersRepository extends Repository<Teacher> {
  async createTeacher(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return await this.save(createTeacherDto);
  }

  async updateTeacher(updateTeacherDto: UpdateTeacherDto): Promise<Teacher> {
    const teacher = await this.save(updateTeacherDto);
    return teacher;
  }

  async findTeacherByRG(document_rg: string): Promise<Teacher> {
    const found = await this.createQueryBuilder('teacher')
      .where('teacher.document_rg = :document_rg', { document_rg: document_rg })
      .getOne();
    return found;
  }

  async listTeachers(listTeachersDto: ListTeachersDto): Promise<Teacher[]> {
    const { code, name, course } = listTeachersDto;
    const query = this.createQueryBuilder('teacher');

    if (code) {
      query
        .andWhere('LOWER(teacher.code) = LOWER(:code)', { code: code })
        .select(['teacher.code']);
    }
    if (name) {
      query
        .andWhere('LOWER(teacher.name) LIKE LOWER(:name)', {
          name: `%${name}%`,
        })
        .select(['teacher.name']);
    }
    if (course) {
      query
        .andWhere('LOWER(teacher.course) LIKE LOWER(:course)', {
          course: `%${course}%`,
        })
        .select(['teacher.course']);
    }

    const list = await query.getMany();
    return list;
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

  async deleteTeacher(document_rg: string): Promise<any> {
    const deleted = await this.delete(document_rg);
    return deleted;
  }
}
