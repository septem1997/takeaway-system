import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';
import {BaseEntity} from "./baseEntity";

@Entity()
export class Statistic extends BaseEntity{

  @Column({comment:'时间类型:年、月、周、日',length:32})
  timeType: string;

  @Column({comment:'数据类型:新用户、营业额、利润',length:32})
  dataType: string;

  @Column({type:"double",precision:11,scale:2,comment:'数据值'})
  dataValue: number;

}
