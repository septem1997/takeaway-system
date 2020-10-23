import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {Admin} from "./admin";
import {BaseEntity} from "./baseEntity";

@Entity()
export class Role extends BaseEntity{

    @Column({length:32})
    roleName: string;

    @OneToMany(type => Admin,admin => admin.role)
    admins:Admin[]

}
