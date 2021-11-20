import { Injectable } from '@nestjs/common';
import { BAD_REQUEST } from '../../shared/error-messages';
import { AuthDto } from '../dto/auth-dto';
import { UsersRepository } from '../repository/users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthSignupService {
  constructor(private usersRepository: UsersRepository) {}

  async signup(authDto: AuthDto): Promise<void> {
    try {
      console.log('signup', authDto.username);
      const found = await this.usersRepository.checkUserAlreadyExists(
        authDto.username,
      );
      console.log('serv signup', found);

      if (found) {
        throw new Error('User already exists');
      }

      const { username, password } = authDto;

      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      await this.usersRepository.createUser({
        username,
        password: hashedPassword,
      });
    } catch (error) {
      return BAD_REQUEST(error?.message);
    }
  }
}
