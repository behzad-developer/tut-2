import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { OrderStatusesService } from '../services/order-statuses.service';
import { CreateOrderStatusDto } from '../dto/create-order-status.dto';
import { UpdateOrderStatusDto } from '../dto/update-order-status.dto';
import { ApiTags } from '@nestjs/swagger';
import { Permissions } from 'src/common/decorators/permissions.decorator';

@Controller('api/v1/order-statuses')
@ApiTags('Order Statuses Controller')
export class OrderStatusesController {
  constructor(private readonly orderStatusesService: OrderStatusesService) {}

  @Post()
  @Permissions()
  create(@Body() createOrderStatusDto: CreateOrderStatusDto) {
    return this.orderStatusesService.create(createOrderStatusDto);
  }

  @Get()
  @Permissions()
  findAll() {
    return this.orderStatusesService.findAll();
  }

  @Patch(':id')
  @Permissions()
  update(
    @Param('id') id: string,
    @Body() updateOrderStatusDto: UpdateOrderStatusDto,
  ) {
    return this.orderStatusesService.update(+id, updateOrderStatusDto);
  }
}
