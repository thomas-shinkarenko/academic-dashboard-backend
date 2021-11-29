import { EntityRepository, Repository } from 'typeorm';
import { AuthDto } from '../dto/auth-dto';
import { User } from '../user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(authDto: AuthDto): Promise<void> {
    await this.save(authDto);
    return;
  }

  async checkUserAlreadyExists(
    username: string,
  ): Promise<{ username: string }> {
    const found = await this.createQueryBuilder('user')
      .where('user.username = :username', { username: username })
      .select(['user.username'])
      .getOne();
    return found;
  }

  async findUser(username: string): Promise<User> {
    const found = await this.createQueryBuilder('user')
      .where('user.username = :username', { username: username })
      .getOne();
    return found;
  }
}
