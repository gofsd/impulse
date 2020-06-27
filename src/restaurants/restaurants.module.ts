import { Module } from '@nestjs/common';
import { RestaurantsController } from  './restaurants.controller'
import { RestaurantsService } from './restaurants.service'
import Restaurant from './restaurant.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    controllers: [RestaurantsController],
    providers: [RestaurantsService],
    imports: [
      TypeOrmModule.forFeature([Restaurant])
    ]
  })
export class RestaurantsModule {}
