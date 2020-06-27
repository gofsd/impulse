import { Module } from '@nestjs/common';
import { OrdersController } from  './orders.controller'
import { OrderService } from './orders.service'
import Order from './order.entity'
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    controllers: [OrdersController],
    providers: [OrderService],
    imports: [
      TypeOrmModule.forFeature([Order])
    ]
  })
export class OrdersModule {}
