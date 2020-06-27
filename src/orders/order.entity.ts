import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

 
@Entity()
class Orders {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public client: number;

  @Column()
  public executor: number;
 
  @Column()
  public address: string;

  @Column()
  public restaurant_id: number;

  @Column()
  public price: number;

  @Column()
  public exec_time: number;
 
}
 
export default Orders;