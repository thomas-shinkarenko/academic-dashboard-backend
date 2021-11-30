import { Injectable } from '@nestjs/common';
import { BAD_REQUEST } from 'src/shared/error-messages';
import { ListTeachersDto } from '../dto/list-teacher.dto';
import { TeachersRepository } from '../repository/teachers.repository';
import { Teacher } from '../teacher.entity';

@Injectable()
export class ListTeachersService {
  constructor(private teachersRepository: TeachersRepository) {}

  async listTeachers(listTeachersDto: ListTeachersDto): Promise<Teacher[]> {
    try {
      const found = await this.teachersRepository.listTeachers(listTeachersDto);
      if (found.length === 0) {
        throw new Error('Nenhum professor foi encontrado');
      }

      return found;
    } catch (error) {
      return BAD_REQUEST(error?.message);
    }
  }
}
