import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, OneToOne} from 'typeorm';
import {User} from "./user";
import {BaseEntity} from "./baseEntity";
import {Order} from "./order";

@Entity()
export class Comment extends BaseEntity{
    @Column({type:"text",comment:'评论内容'})
    content: string;

    @Column({type:"text",comment:'商家回复'})
    reply: string;

    @Column({type:"text",comment:'评论附图'})
    images: string;

    @Column({comment:'用户评分'})
    score:number

    @ManyToOne(type => User, user => user.comments)
    user:User

    // todo 评论和商品的关联(点赞)

    @OneToOne(type => Order, order => order.comment)
    order:Order

}
