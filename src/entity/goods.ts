import { Entity, Column, ManyToOne} from "typeorm";
import {BaseEntity} from "./baseEntity";
import {GoodsType} from "./goodsType";

@Entity()
export class Goods extends BaseEntity{

    @Column({comment:'商品名称'})
    name: string;

    @Column({type:"text",comment:'商品图'})
    images: string;

    @ManyToOne(type => GoodsType, goodsType => goodsType.goodsList)
    goodsType:GoodsType

    @Column({default:false,comment:'是否在售'})
    onSale:boolean;

    @Column({type:'tinyint',comment:'好评率',nullable:true})
    rate: number;

    @Column({type:"float",precision:9,scale:2,comment:'定价'})
    price:number


    @Column({comment:'销量'})
    sales: number;

    @Column({comment:'库存'})
    stock: number;

}
