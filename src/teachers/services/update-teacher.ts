import { Injectable } from '@nestjs/common';
import { BAD_REQUEST } from 'src/shared/error-messages';
import { UpdateTeacherDto } from '../dto/update-teacher.dto';
import { TeachersRepository } from '../repository/teachers.repository';
import { Teacher } from '../teacher.entity';

@Injectable()
export class UpdateTeacherService {
  constructor(private teachersRepository: TeachersRepository) {}

  async updateTeacher(
    document_rg: string,
    updateTeacherDto: UpdateTeacherDto,
  ): Promise<Teacher> {
    try {
      const teacher = await this.teachersRepository.findTeacherByRG(
        document_rg,
      );

      if (!teacher) {
        throw new Error('Professor não encontrado');
      }

      teacher.name = updateTeacherDto.name;
      teacher.document_rg = updateTeacherDto.document_rg;
      teacher.document_rg_expeditor = updateTeacherDto.document_rg_expeditor;
      teacher.document_cpf = updateTeacherDto.document_cpf;
      teacher.phone = updateTeacherDto.phone;
      teacher.email = updateTeacherDto.email;
      teacher.address = updateTeacherDto.address;
      teacher.address_number = updateTeacherDto.address_number;
      teacher.address_complement = updateTeacherDto.address_complement;
      teacher.zip_code = updateTeacherDto.zip_code;

      return await this.teachersRepository.updateTeacher(teacher);
    } catch (error) {
      return BAD_REQUEST(error?.message);
    }
  }
}
