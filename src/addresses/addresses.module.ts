import { Module } from '@nestjs/common';
import { AddressesService } from './services/addresses.service';
import { AddressesController } from './controllers/addresses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { AddressRepository } from './repositories/address.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity])],
  controllers: [AddressesController],
  providers: [AddressesService, AddressRepository],
})
export class AddressesModule {}
