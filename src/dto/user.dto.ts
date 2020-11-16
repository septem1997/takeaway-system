import { Pageable } from './pageable';

export class UserDto extends Pageable{
  username: string;
  password: string;
  nickname:string;
}
