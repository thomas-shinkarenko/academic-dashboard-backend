import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({ unique: true, type: 'varchar', length: 8 })
  code: string;

  @Column()
  name: string;

  @Column({ unique: true })
  course: string;
}
