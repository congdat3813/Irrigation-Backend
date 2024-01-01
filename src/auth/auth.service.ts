import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InvalidToken } from './auth.entity';
import { VerifyTokenBody } from './auth.request';
import { JWT_SALT } from 'src/utils';
import {
  ILoginResponse,
  ResetPassRequest,
  ResetPassResponse,
} from './auth.dto';
import { sign } from 'jsonwebtoken';
import { isEmpty } from 'lodash';
import { UsersService } from 'src/users/users.service';
import { validate } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { compareSync, hashSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<ILoginResponse> {
    const user = await this.userService.findSingleBy(
      { username },
      {
        select: ['id', 'avatar', 'email', 'password', 'username', 'role'],
      },
    );
    if (!user || !compareSync(password, user.password)) {
      throw new UnauthorizedException('Invalid username or password');
    } else {
      const token = sign({ userId: user.id }, JWT_SALT);
      return {
        token,
        user,
      };
    }
  }

  async verifyToken(body: VerifyTokenBody, currentUser: User): Promise<User> {
    await validate(body);

    if (currentUser?.id !== body.userId) throw new InvalidToken();
    return currentUser;
  }

  async validateUserJWT(userId: string): Promise<any> {
    const user = await this.userService.findSingleBy({ id: userId });
    if (isEmpty(user)) throw new InvalidToken();
    return user;
  }

  async resetPassword(
    requestUser: ResetPassRequest,
  ): Promise<ResetPassResponse> {
    const user = await this.userService.findSingleBy({
      username: requestUser.username,
    });
    if (!user) {
      throw new NotFoundException('There is no user with the given username.');
    }
    const password = hashSync(requestUser.password, 10);

    return this.userService.update(user.id, { password });
  }
}
