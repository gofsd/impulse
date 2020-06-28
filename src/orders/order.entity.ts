import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

 
@Entity()
class Orders {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: "bigint",
  })
  public client: number;

  @Column({
    type: "bigint",
    nullable: true
  })
  public executor: number;
 
  @Column()
  public address: string;

  @Column({
    type: "bigint",
    nullable: true
  })
  public restaurant_id: number;

  @Column({
    type: "bigint",
    nullable: true
  })
  public price: number;

  @Column({
    type: "bigint",
    nullable: true
  })
  public exec_time: number;
 
}
 
export default Orders;