import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '../entity/admin';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { Goods } from '../entity/goods';
import { GoodsDto } from '../dto/goods.dto';
import { GoodsType } from '../entity/goodsType';
import { GoodsTypeDto } from '../dto/goodsType.dto';

@Injectable()
export class GoodsTypeService {

  constructor(
    @InjectRepository(GoodsType)
    private repository: Repository<GoodsType>,
  ) {
  }

  async findOneBy(id: number) {
    return await this.repository.findOne(id);
  }

  async findAll() {
    return await this.repository.find();
  }

  async edit(goodsTypeDto: GoodsTypeDto) {
    let goodsType;
    if (goodsTypeDto.id) {
      goodsType = this.repository.findOne(goodsTypeDto.id);
    } else {
      goodsType = new GoodsType();
      goodsType.createTime = new Date().toISOString();
    }
    goodsType.name = goodsTypeDto.name;
    await this.repository.save(goodsType);
    return {
      msg: '新增商品分组成功',
    };
  }


  async getTypeList() {
    const qb = this.repository.createQueryBuilder('goodsType')
      .select(['goodsType.id', 'goodsType.name'])
      .where('tag.disabled = 0');
    return await qb.getMany()
  }

  async deleteBy(ids: Array<number>) {
    const list = await this.repository.findByIds(ids);
    list.forEach(item => item.disabled = true);
    await this.repository.save(list);
    return {
      msg: '删除商品分组成功',
    };
  }
}
