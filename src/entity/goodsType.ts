import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import {BaseEntity} from "./baseEntity";
import {Comment} from "./comment";
import {Goods} from "./goods";

@Entity()
export class GoodsType extends BaseEntity{

    @Column({comment:'商品分组名称',length:32})
    name: string;


    @OneToMany(type => Goods,goods => goods.goodsType)
    goodsList:Goods[]

}
