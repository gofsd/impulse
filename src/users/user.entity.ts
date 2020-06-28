import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type UserRoleType = "admin" | "executor" | "client" | "guest";

@Entity()
class Users {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column()
  public name: string;
 
  @Column()
  public email: string;

  @Column({
    type: "enum",
    enum: ["admin", "executor", "client", "guest"],
    default: "guest"
})
  public role: UserRoleType;
 
}
 
export default Users;