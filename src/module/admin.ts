import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Admin} from "../entity/admin";
import {Role} from "../entity/role";

@Module({
    imports: [TypeOrmModule.forFeature([Admin]),TypeOrmModule.forFeature([Role])],
})
export class AdminModule {}
