import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from 'src/addresses/entities/address.entity';
import { RegionEntity } from 'src/manager/regions/entities/region.entity';
import { UserTypeEntity } from 'src/manager/user-types/entities/user-type.entity';
import { OrderStatusEntity } from 'src/order-statuses/entities/order-status.entity';
import { PermissionEntity } from 'src/permissions/entities/permission.entity';
import { RoleEntity } from 'src/roles/entities/role.entity';
import { UserEntity } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'behzad01',
      database: 'tut3',
      entities: [
        UserEntity,
        RoleEntity,
        PermissionEntity,
        AddressEntity,
        OrderStatusEntity,
        UserTypeEntity,
        RegionEntity,
      ],
      synchronize: false,
      cache: {
        type: 'redis',
        duration: 60000,
        alwaysEnabled: true,
      },
    }),
  ],
})
export class DatabaseModule {}
