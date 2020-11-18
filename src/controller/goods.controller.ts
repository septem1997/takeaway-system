import { Body, Controller, Get, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { GoodsService } from '../service/goods.service';
import { GoodsDto } from '../dto/goods.dto';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';

@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {
  }


  @Post('upload')
  @UseGuards(AuthGuard('adminJwt'))
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file): Promise<any> {
    const fileName = uuidv4() + '_' + file.originalname;
    const fs = require('fs-extra'), ObsClient = require('esdk-obs-nodejs');
    await fs.writeFileSync(fileName, file.buffer);
    const obsClient = new ObsClient({
      access_key_id: process.env.access_key_id,
      secret_access_key: process.env.secret_access_key,
      server: process.env.server,
    });

    await new Promise((resolve, reject) => {
      obsClient.putObject({
        Bucket: process.env.bucket,
        Key: 'bananaTec-goods/' + fileName,
        SourceFile: fileName,
      }, (err, result) => {
        if (err) {
          reject('Error-->' + err);
        } else {
          resolve('Status-->' + result.CommonMsg.Status);
        }
      });
    });
    await fs.unlinkSync(fileName);
    return {
      url: 'https://' + process.env.bucket + '.' + process.env.server + '/bananaTec-goods/' + fileName,
    };
  }

  @Post('edit')
  @UseGuards(AuthGuard('adminJwt'))
  edit(@Body() goodsDto: GoodsDto) {
    return this.goodsService.edit(goodsDto);
  }

  @Post('delete')
  @UseGuards(AuthGuard('adminJwt'))
  delete(@Body('ids') ids: Array<number>) {
    return this.goodsService.deleteBy(ids);
  }


  @Get()
  @UseGuards(AuthGuard('adminJwt'))
  getGoodsList() {
    return this.goodsService.getGoodsList();
  }

}
