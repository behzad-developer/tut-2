import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from '../dto/create-address.dto';
import { UpdateAddressDto } from '../dto/update-address.dto';
import { AddressRepository } from '../repositories/address.repository';
import { AddressEntity } from '../entities/address.entity';
import { AddressQueryDto } from '../dto/address-query.dto';

@Injectable()
export class AddressesService {
  constructor(private addressRepository: AddressRepository) {}
  async create(CreateAddressDto: CreateAddressDto) {
    return this.addressRepository.createAndSave(CreateAddressDto);
  }

  findAll(dto: AddressQueryDto) {
    return this.addressRepository.findAll(dto);
  }

  findOne(id: number) {
    return this.addressRepository.findOneByCredential(id);
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    const { name } = updateAddressDto;
    const address = new AddressEntity({
      id,
      name,
    });
    return this.addressRepository.save(address);
  }
}
