import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Goods } from '../entity/goods';
import { GoodsType } from '../entity/goodsType';
import { GoodsController } from '../controller/goods.controller';
import { GoodsService } from '../service/goods.service';
import { GoodsTypeController } from '../controller/goodsType.controller';
import { GoodsTypeService } from '../service/goodsType.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Goods]),
    TypeOrmModule.forFeature([GoodsType])
  ],
  controllers:[GoodsController,GoodsTypeController],
  providers:[GoodsService,GoodsTypeService]
})
export class GoodsModule {
}
