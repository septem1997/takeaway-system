import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user';
import { Address } from '../entity/address';
import { UserController } from '../controller/user.controller';
import { UserService } from '../service/user.service';
import { UserJwtStrategy } from '../commont/user.jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from '../commont/constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secretForUser,
      signOptions: { expiresIn: '3600s' },
    })],
  controllers: [UserController],
  providers: [UserService, UserJwtStrategy],
})
export class UserModule {
}
