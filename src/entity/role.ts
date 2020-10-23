import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {Admin} from "./admin";
import {BaseEntity} from "./baseEntity";

@Entity()
export class Role extends BaseEntity{

    @Column()
    roleName: string;

    @OneToMany(type => Admin,admin => admin.role)
    admins:Admin[]

}
