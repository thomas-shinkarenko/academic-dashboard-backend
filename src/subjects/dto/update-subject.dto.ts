import { Length } from 'class-validator';

export class UpdateSubjectDto {
  @Length(8, 8, { message: 'O código precisa ter 8 caracteres' })
  code: string;

  name: string;

  course: string;
}
