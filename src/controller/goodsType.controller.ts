import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { GoodsService } from '../service/goods.service';
import { GoodsDto } from '../dto/goods.dto';
import { AuthGuard } from '@nestjs/passport';
import { GoodsTypeService } from '../service/goodsType.service';
import { GoodsTypeDto } from '../dto/goodsType.dto';

@Controller('goodsType')
export class GoodsTypeController {
  constructor(private readonly service: GoodsTypeService) {
  }


  @Post('edit')
  @UseGuards(AuthGuard('adminJwt'))
  edit(@Body() goodsTypeDto: GoodsTypeDto) {
    return this.service.edit(goodsTypeDto)
  }

  @Post('delete')
  @UseGuards(AuthGuard('adminJwt'))
  delete(@Body('ids') ids:Array<number>) {
    return this.service.deleteBy(ids)
  }

  @Get()
  // @UseGuards(AuthGuard('adminJwt'))
  getList(){
    return this.service.getTypeList()
  }

}
