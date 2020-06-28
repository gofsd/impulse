import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import Order from './order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection } from 'typeorm';
import * as queries from './orders.queries'

@Injectable()
export class OrderService extends TypeOrmCrudService<Order>{
  public db: any;

  constructor(@InjectRepository(Order) ordersRepository: Repository<Order>){
    super(ordersRepository);
    this.db = ordersRepository.manager;
  }
  
  async getOneRow(query: string, args: Array<any>): Promise<any> {
    const result = await this.db.query(query, args);
    return result.length ? result[0] : {}
  }

  async findOftenDelivered(userId: any): Promise<any> {
    return await this.getOneRow(queries.oftenDelivered, [userId])
  }

  async findOrdersCount(userId: any): Promise<any> {
    return await this.getOneRow(queries.ordersCount, [userId])
  }

  async findAvgExecTime(userId: any): Promise<any> {
    return await this.getOneRow(queries.avgExecTime, [userId])
  }

  async findTotalOrderPrice(userId: any): Promise<any> {
    return this.getOneRow(queries.totalOrdersPrice, [userId])
  }
}