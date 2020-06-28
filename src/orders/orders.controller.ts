import { Controller, Get, Param } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import Orders from './order.entity'
import { OrderService } from './orders.service'

@Crud({
    model: {
      type: Orders,
    }
  })
@Controller('orders')
export class OrdersController  implements CrudController<Orders>{
    constructor(public service: OrderService){}

    @Get('often-delivered/:userId')
    async findOftenDelivered(@Param('userId') userId): Promise<any> {
      return this.service.findOftenDelivered(userId)
    }

    @Get('orders-count/:userId')
    async findOrdersCount(@Param('userId') userId): Promise<any> {
      return  this.service.findOrdersCount(userId);
    }

    @Get('avg-exec-time/:userId')
    async findAvgExecTime(@Param('userId') userId): Promise<any> {
      return  this.service.findAvgExecTime(userId);
    }

    @Get('total-orders-price/:userId')
    async findTotalOrderPrice(@Param('userId') userId): Promise<any> {
      return  this.service.findTotalOrderPrice(userId);
    }
}
