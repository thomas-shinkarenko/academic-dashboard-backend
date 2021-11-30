import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsNumberString,
  Length,
  MaxLength,
} from 'class-validator';

export class UpdateTeacherDto {
  name: string;

  @MaxLength(13)
  document_rg: string;

  @Length(2, 2)
  document_rg_expeditor: string;

  @Length(11, 11)
  document_cpf: string;

  @IsMobilePhone('pt-BR')
  phone: string;

  @IsEmail()
  email: string;

  address: string;

  @IsNumberString()
  address_number: string;

  address_complement: string;

  @MaxLength(10)
  zip_code: string;
}
