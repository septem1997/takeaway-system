import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import {Role} from "./role";
import {BaseEntity} from "./baseEntity";

@Entity()
export class Admin extends BaseEntity{

    @Column({comment:'用户名',length:32})
    username: string;

    @Column({comment:'后台人员姓名',length:32})
    name:string;

    @Column({length:32})
    phone:string

    @ManyToOne(type => Role, role => role.admins)
    role:Role

    @Column()
    password: string;
}
