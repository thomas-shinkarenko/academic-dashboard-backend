import { IsNotEmpty } from 'class-validator';

export class CreateSubjectDto {
  @IsNotEmpty()
  code: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  course: string;
}
