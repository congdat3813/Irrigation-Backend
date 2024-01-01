import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { BaseService } from 'src/base/base.service';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IdPrefix } from 'src/utils';
import { isEmpty } from 'lodash';
import { hashSync } from 'bcrypt';

@Injectable()
export class UsersService extends BaseService<User, CreateUserDto, any> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository, IdPrefix.USER);
  }

  async createNewUser(newUser: CreateUserDto): Promise<User> {
    const existedUser = await this.findSingleBy({ username: newUser.username });
    if (isEmpty(existedUser)) {
      newUser.password = hashSync(newUser.password, 10);
      const createdUser = await this.create(newUser);

      return createdUser;
    } else {
      throw new ConflictException('Username Already Exist');
    }
  }
}
