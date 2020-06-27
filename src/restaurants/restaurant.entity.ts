import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

 
@Entity()
class Restaurants {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;
 
  @Column()
  public address: string;
 
}
 
export default Restaurants;