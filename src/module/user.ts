import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from "../entity/user";
import {Address} from "../entity/address";

@Module({
    imports: [TypeOrmModule.forFeature([User]),TypeOrmModule.forFeature([Address])],
})
export class UserModule {}
