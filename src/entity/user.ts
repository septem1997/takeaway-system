import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {Admin} from "./admin";
import {Address} from "./address";
import {Comment} from "./comment";
import {Order} from "./order";
import {BaseEntity} from "./baseEntity";

@Entity()
export class User extends BaseEntity{

    @Column({comment:'用户名'})
    username: string;

    @Column({comment:'用户昵称'})
    nickname: string;

    @Column({select:false})
    password: string;

    @OneToMany(type => Address,address => address.user)
    addresses:Address[]


    @OneToMany(type => Comment,comment => comment.user)
    comments:Comment[]

    @OneToMany(type => Order,order => order.user)
    orders:Order[]
}