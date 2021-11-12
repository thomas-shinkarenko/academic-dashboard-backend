import { IsNotEmpty } from 'class-validator';

export class FindSubjectDto {
  @IsNotEmpty()
  code: string;
}
