import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import {BaseEntity} from "./baseEntity";
import {User} from "./user";
import {GoodsType} from "./goodsType";
import { Goods } from './goods';

@Entity()
export class ShoppingCartGoods extends BaseEntity{

    @Column({comment:'加入购物车数量'})
    buyNum: number;

    @ManyToOne(type => User, user => user.shoppingCartGoods)
    user:User

    @ManyToOne(type => Goods)
    goods:Goods

}
