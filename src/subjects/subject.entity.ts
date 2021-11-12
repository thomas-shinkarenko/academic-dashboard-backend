import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'subjects' })
export class Subject {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true, type: 'varchar', length: 8 })
  code: string;

  @Column()
  name: string;

  @Column()
  course: string;
}
