import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import Restaurant from './restaurant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantsService extends TypeOrmCrudService<Restaurant>{
  constructor(@InjectRepository(Restaurant) usersRepository: Repository<Restaurant>){
    super(usersRepository);
  }
}