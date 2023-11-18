import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { MulterModule } from '@nestjs/platform-express';
import { join } from 'path';
import { PermissionsModule } from './permissions/permissions.module';
import { RolesModule } from './roles/roles.module';
import { UserTypesModule } from './manager/user-types/user-types.module';
import { OrdersModule } from './manager/orders/orders.module';
import { OrderStatusesModule } from './order-statuses/order-statuses.module';
import { RegionsModule } from './manager/regions/regions.module';
import { AddressesModule } from './addresses/addresses.module';
import { ManagerModule } from './manager/manager.module';
import { AuthenticationsModule } from './authentications/authentications.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    MulterModule.register({
      dest: './uploads',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', './uploads'),
      serveRoot: '/uploads',
    }),
    PermissionsModule,
    RolesModule,
    AuthenticationsModule,
    UserTypesModule,
    OrdersModule,
    OrderStatusesModule,
    RegionsModule,
    AddressesModule,
    ManagerModule,
  ],
})
export class AppModule {}
