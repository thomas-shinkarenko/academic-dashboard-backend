import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from './models/user-role';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  role_code: UserRole;
}
