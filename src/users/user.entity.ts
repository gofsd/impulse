import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

 
@Entity()
class Users {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column()
  public name: string;
 
  @Column()
  public email: string;

  @Column()
  public role: number;
 
}
 
export default Users;