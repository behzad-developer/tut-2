import { Module } from '@nestjs/common';
import { AuthenticationsController } from './controllers/authentications.controller';
import { UsersModule } from 'src/users/users.module';
// import { ManagerUserRepository } from 'src/manager/users/repositories/managerUser.repository';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  AuthenticationsService,
  TokenService,
} from 'src/authentications/services/index';
import { JwtStrategy, BasicStrategy } from 'src/authentications/strategies';
import {
  JwtAuthGuard,
  PermissionGuard,
} from 'src/authentications/guards/index';

@Module({
  controllers: [AuthenticationsController],
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get('JWT_ACCESS_EXPIRES_IN'),
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [
    // ManagerUserRepository,
    JwtStrategy,
    BasicStrategy,
    AuthenticationsService,
    TokenService,
    JwtAuthGuard,
    PermissionGuard,
  ],
})
export class AuthenticationsModule {}
