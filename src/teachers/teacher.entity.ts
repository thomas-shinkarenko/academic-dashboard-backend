import { IsEmail, IsMobilePhone, Length, MaxLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'teacher' })
export class Teacher {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: false })
  name: string;

  @MaxLength(12)
  @Column({ nullable: false, unique: true })
  document_rg: string;

  @Length(2)
  @Column({ nullable: false })
  document_rg_expeditor: string;

  @Length(2)
  @Column({ nullable: false, unique: true })
  document_cpf: string;

  @Column({ nullable: false, unique: true })
  @IsMobilePhone('pt-BR')
  phone: string;

  @Column({ nullable: false, unique: true })
  @IsEmail()
  email: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  address_number: string;

  @Column()
  address_complement: string;

  @Column({ nullable: false })
  zip_code: string;
}
