import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column('un')
  code: string;

  @Column()
  name: string;

  @Column()
  course: string;
}
