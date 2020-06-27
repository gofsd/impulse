import { Controller } from '@nestjs/common';
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
}
