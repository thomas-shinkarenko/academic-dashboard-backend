import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateTeacherDto {
  @IsNotEmpty()
  name: string;

  @MaxLength(13)
  @IsNotEmpty()
  document_rg: string;

  @Length(2, 2)
  @IsNotEmpty()
  document_rg_expeditor: string;

  @Length(11, 11)
  @IsNotEmpty()
  document_cpf: string;

  @IsNotEmpty()
  @IsMobilePhone('pt-BR')
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  address: string;

  @IsNumberString()
  address_number: string;

  address_complement: string;

  @MaxLength(10)
  @IsNotEmpty()
  zip_code: string;
}
