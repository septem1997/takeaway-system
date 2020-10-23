import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne} from 'typeorm';
import {User} from "./user";
import {BaseEntity} from "./baseEntity";
import {Order} from "./order";

@Entity()
export class Comment extends BaseEntity{
    @Column({type:"text",comment:'评论内容'})
    content: string;

    @Column({type:"text",comment:'商家回复',nullable:true})
    reply: string;

    @Column({type:"text",comment:'评论附图',nullable:true})
    images: string;

    @Column({type:'tinyint',comment:'用户评分',nullable:true})
    score:number

    @ManyToOne(type => User, user => user.comments)
    user:User

    @OneToOne(type => Order, order => order.comment)
    order:Order

}
