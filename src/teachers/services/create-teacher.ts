import { Injectable } from '@nestjs/common';
import { BAD_REQUEST, DUPLICATED_KEY } from 'src/shared/error-messages';
import { CreateTeacherDto } from '../dto/create-teacher.dto';
import { TeachersRepository } from '../repository/teachers.repository';
import { Teacher } from '../teacher.entity';

@Injectable()
export class CreateTeacherService {
  constructor(private teachersRepository: TeachersRepository) {}

  async createTeacher(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    try {
      const { document_rg } = createTeacherDto;
      console.log(document_rg);
      const found = await this.teachersRepository.checkTeacherExists(
        document_rg,
      );
      console.log(found);
      if (found) {
        throw new Error('Já existe um professor cadastrado com esse RG');
      }

      await this.teachersRepository.createTeacher(createTeacherDto);
      return;
    } catch (error) {
      console.log(error);
      return DUPLICATED_KEY(error?.message);
    }
  }
}
