import { Injectable } from '@nestjs/common';
import { JWT_GUARD_KEY } from 'src/common/constants/constants';
import { AuthGuard } from '@nestjs/passport';
@Injectable()
export class JwtAuthGuard extends AuthGuard(JWT_GUARD_KEY) {}
