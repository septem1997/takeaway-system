import {Entity, Column, OneToMany, ManyToOne, OneToOne} from 'typeorm';
import {User} from "./user";
import {BaseEntity} from "./baseEntity";
import {Comment} from "./comment";
import { OrderGoods } from './orderGoods';

const moment = require('moment');

@Entity()
export class Order extends BaseEntity{


    @Column({type:'tinyint',comment:'订单状态，0：未接单，1：已接单，2：已拒绝，3：已完成'})
    status:0|1|2|3;

    @ManyToOne(type => User, user => user.orders)
    user:User

    @OneToOne(type => Comment, comment => comment.order)
    comment:Comment

    @OneToMany(type => OrderGoods, goodsList => goodsList.order)
    goodsList:OrderGoods[]

    @Column({type:"datetime",comment:'接单时间', transformer:{
            from(value: any): any {
                return moment(value).format('YYYY年MM月DD日 HH:mm:ss')
            },
            to(value: any): any {
                return value
            }
        }})
    handleTime:string;

    @Column({type:"datetime",comment:'完成时间', transformer:{
            from(value: any): any {
                return moment(value).format('YYYY年MM月DD日 HH:mm:ss')
            },
            to(value: any): any {
                return value
            }
        }})
    finishTime:string;

    @Column({comment:'详细地址'})
    address: string;

    @Column({comment:'收货人姓名',length:32})
    receiver:string;

    @Column({type:"float",precision:9,scale:6,comment:'纬度'})
    latitude:number

    @Column({type:"float",precision:9,scale:6,comment:'经度'})
    longitude:number

    @Column({length:32})
    phone:string

    @Column({comment:'订单总金额'})
    totalPrice:number;

}
