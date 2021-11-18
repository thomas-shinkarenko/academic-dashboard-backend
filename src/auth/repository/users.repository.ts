import { EntityRepository, Repository } from 'typeorm';
import { AuthDto } from '../dto/auth-dto';
import { User } from '../user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(authDto: AuthDto): Promise<void> {
    await this.save(authDto);
    return;
  }

  async checkUserAlreadyExists(username: string): Promise<any> {
    console.log('opa');
    console.log('check username', username);
    const found = await this.createQueryBuilder('user')
      .where('user.username = :username', { username: username })
      .select(['user.username'])
      .getOne();
    console.log('repo check', found);
    return found;
  }

  async findUser(username: string): Promise<any> {
    const found = await this.createQueryBuilder('user')
      .where('user.username = :username', { username: username })
      .getOne();
    return found;
  }
}
