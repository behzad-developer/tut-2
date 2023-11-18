import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { ManagerUserRepository } from 'src/manager/users/repositories/managerUser.repository';
import { LoginDto, UserResponseDto } from 'src/authentications/dto';
import { HashHelper } from 'src/common/HashHelper';
import { UserStatusEnum } from 'src/users/enums';
import { TokenService } from './token.service';
import { JwtPayload } from 'src/authentications/interfaces';
@Injectable()
export class AuthenticationsService {
  constructor(
    private managerUserRepository: ManagerUserRepository,
    private tokenService: TokenService,
  ) {}

  async login(dto: LoginDto) {
    const { password, phonenumber } = dto;
    const user = await this.managerUserRepository.findOneByPhonenumber(
      phonenumber,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    const passwordCheck = await HashHelper.compare(password, user.password);
    if (!passwordCheck) {
      throw new UnauthorizedException();
    }
    if (user.status !== UserStatusEnum.ACTIVE) {
      throw new ForbiddenException('User is not active');
    }
    const tokens = await this.tokenService.generateTokens({
      id: user.id,
    });
    return new UserResponseDto(user, tokens);
  }

  async validateToken(token: string) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result: JwtPayload = await this.tokenService.validate(token);
      return {
        valid: true,
      };
    } catch (error) {
      return {
        valid: false,
      };
    }
  }

  async generateToken(token: string) {
    try {
      const result: JwtPayload = await this.tokenService.validate(token);
      const { id } = result;
      const user = await this.managerUserRepository.findOneBy({
        
      });
      if (!user) {
        throw new NotFoundException(
          'User with these credentials does not exist',
        );
      }
      if (user.status !== UserStatusEnum.ACTIVE) {
        throw new ForbiddenException('User is not active');
      }
      return this.tokenService.generateAccessToken({
        id: user.id,
      });
    } catch (error) {
      throw new BadRequestException('Token is Invalid');
    }
  }
}
