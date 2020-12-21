import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '../entity/admin';
import { Repository } from 'typeorm';
import { Goods } from '../entity/goods';
import { GoodsDto } from '../dto/goods.dto';
import { GoodsTypeService } from './goodsType.service';
import { GoodsType } from '../entity/goodsType';

@Injectable()
export class GoodsService {

  constructor(
    @InjectRepository(Goods)
    private repository: Repository<Goods>,
    private goodsTypeService: GoodsTypeService,
  ) {
  }

  async edit(goodsDto: GoodsDto) {
    let goods;
    if (goodsDto.id) {
      goods = this.repository.findOne(goodsDto.id);
    } else {
      goods = new Goods();
      goods.createTime = new Date().toISOString();
    }
    goods.name = goodsDto.name;
    goods.images = goodsDto.images;
    goods.onSale = goodsDto.onSale;
    goods.price = goodsDto.price;
    goods.stock = goodsDto.stock;
    goods.goodsType = await this.goodsTypeService.findOneBy(goodsDto.goodsTypeId);
    const res = await this.repository.save(goods);
    console.log(res);
    return {
      msg: '新增商品成功',
    };
  }


  async deleteBy(ids: Array<number>) {
    const list = await this.repository.findByIds(ids);
    list.forEach(item => item.disabled = true);
    await this.repository.save(list);
    return {
      msg: '删除商品成功',
    };
  }

  async getGoodsListForStore(typeId) {
    return await this.repository.createQueryBuilder('goods')
      .select(['goods.id', 'goods.name',
        'goods.images', 'goods.onSale', 'goods.rate', 'goods.price', 'goods.sales', 'goods.stock'])
      .where('goods.disabled = 0')
      .andWhere('goods.goodsTypeId = '+typeId)
      .getMany();
  }

  async getGoodsListForUser(typeId) {
    return await this.repository.createQueryBuilder('goods')
      .select(['goods.id', 'goods.name',
        'goods.images', 'goods.rate', 'goods.price', 'goods.sales', 'goods.stock'])
      .where('goods.disabled = 0 and goods.onSale = 1')
      .andWhere('goods.goodsTypeId = '+typeId)
      .getMany();
  }
}
