import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto, TokenDto } from 'src/authentications/dto';
import { AuthenticationsService } from 'src/authentications/services';
@Controller({
  path: 'authentications',
})
@ApiTags('Authentication Controller')
export class AuthenticationsController {
  constructor(private authenticationService: AuthenticationsService) {}
  @Post('login')
  login(@Body() body: LoginDto) {
    return this.authenticationService.login(body);
  }

  @Post('validate/token')
  validateToken(@Body() body: TokenDto) {
    return this.authenticationService.validateToken(body.token);
  }

  @Post('generate/token')
  generateToken(@Body() body: TokenDto) {
    return this.authenticationService.generateToken(body.token);
  }
}
