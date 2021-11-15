import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controller/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { USersRepository } from './repository/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([USersRepository])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
