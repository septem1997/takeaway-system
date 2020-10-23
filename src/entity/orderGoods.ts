import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import {BaseEntity} from "./baseEntity";
import {User} from "./user";
import {GoodsType} from "./goodsType";
import { Goods } from './goods';
import { Order } from './order';

@Entity()
export class OrderGoods extends BaseEntity{

    @Column({comment:'商品名称'})
    name: string;

    @Column({type:"text",comment:'商品图'})
    images: string;

    @ManyToOne(type => Goods)
    goods:Goods;

    @ManyToOne(type => Order)
    order:Order;

    @Column({comment:'购买数量'})
    buyNum: number;

    @Column({type:'tinyint',comment:'评价，0：踩，1：赞',nullable:true})
    thumbsUp:0|1|null;

    @Column({type:"float",precision:9,scale:2,comment:'定价'})
    price:number;

}
