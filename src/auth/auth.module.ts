import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controller/auth.controller';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
