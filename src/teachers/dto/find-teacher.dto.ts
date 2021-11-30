import { IsNotEmpty } from 'class-validator';

export class FindTeacherDtoByRG {
  @IsNotEmpty()
  document_rg: string;
}
