import { IsNotEmpty, Length } from 'class-validator';

export class CreateSubjectDto {
  @IsNotEmpty()
  @Length(8, 8, { message: 'O código precisa ter 8 caracteres' })
  code: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  course: string;
}
