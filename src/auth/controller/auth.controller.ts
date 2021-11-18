import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from '../dto/auth-dto';
import { AuthSignInService } from '../services/auth-signin';
import { AuthSignupService } from '../services/auth-signup';

@Controller('auth')
export class AuthController {
  constructor(
    private signupService: AuthSignupService,
    private signinService: AuthSignInService,
  ) {}

  @Post('signup')
  signUp(@Body() authDto: AuthDto): Promise<void> {
    return this.signupService.signup(authDto);
  }

  @Post('signin')
  signIn(@Body() authDto: AuthDto): Promise<{ token: string }> {
    return this.signinService.signIn(authDto);
  }
}
