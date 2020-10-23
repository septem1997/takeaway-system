import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import {User} from "./user";
import {BaseEntity} from "./baseEntity";

@Entity()
export class Address extends BaseEntity{

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

    @ManyToOne(type => User, user => user.addresses)
    user:User

}
