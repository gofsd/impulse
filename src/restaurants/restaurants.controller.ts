import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import Restaurants from './restaurant.entity'
import { RestaurantsService } from './restaurants.service'

@Crud({
    model: {
      type: Restaurants,
    }
  })
@Controller('restaurants')
export class RestaurantsController  implements CrudController<Restaurants>{
    constructor(public service: RestaurantsService){}
}
