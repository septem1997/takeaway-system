import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from '../entity/admin';
import { Role } from '../entity/role';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../commont/constants';
import { AdminController } from '../controller/admin.controller';
import { AdminService } from '../service/admin.service';
import { AdminJwtStrategy } from '../commont/admin.jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Admin]),
    TypeOrmModule.forFeature([Role]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secretForAdmin,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers:[AdminController],
  providers:[AdminService,AdminJwtStrategy]
})
export class AdminModule {
}
