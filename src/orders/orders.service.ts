import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import Order from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService extends TypeOrmCrudService<Order>{
  constructor(@InjectRepository(Order) usersRepository: Repository<Order>){
    super(usersRepository);
  }
}