import { Column, Entity } from 'typeorm';

@Entity({ name: 'subjects' })
export class Subject {
  @Column({ primary: true, type: 'char', length: 8 })
  code: string;

  @Column()
  name: string;

  @Column()
  course: string;
}
