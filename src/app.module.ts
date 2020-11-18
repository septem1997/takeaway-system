import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user';
import { AdminModule } from './module/admin';
import { GoodsModule } from './module/goods';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'cdb-o6v84cdk.cd.tencentcdb.com',
      port: 10122,
      username: 'root',
      password: '0418@banana',
      database: 'takeaway-system',
      entities: [__dirname + '/entity/*{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    AdminModule,
    GoodsModule,
  ],
  controllers: [AppController],
})
export class AppModule {
}
