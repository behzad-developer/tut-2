import { Module } from '@nestjs/common';
import { OrderStatusesService } from './services/order-statuses.service';
import { OrderStatusesController } from './controllers/order-statuses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderStatusEntity } from './entities/order-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderStatusEntity])],
  controllers: [OrderStatusesController],
  providers: [OrderStatusesService],
})
export class OrderStatusesModule {}
