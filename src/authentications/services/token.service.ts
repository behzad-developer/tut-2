import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import {
  JwtPayload,
  TokenInterface,
} from 'src/authentications/interfaces/index';

@Injectable()
export class TokenService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async generateAccessToken(payload: JwtPayload) {
    return {
      token: await this.jwtService.signAsync(payload),
      expiresIn: this.configService.get('JWT_ACCESS_EXPIRES_IN'),
    };
  }

  async generateRefreshToken(payload: JwtPayload) {
    return this.jwtService.signAsync(payload, {
      expiresIn: this.configService.get('JWT_REFRESH_EXPIRES_IN'),
    });
  }

  async generateTokens(payload: JwtPayload): Promise<TokenInterface> {
    return {
      access: await this.generateAccessToken(payload),
      refresh: await this.generateRefreshToken(payload),
    };
  }

  async validate(token: string) {
    return this.jwtService.verifyAsync(token);
  }
}
