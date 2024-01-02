import { User } from 'src/users/entities/user.entity';

export enum IdPrefix {
  USER = 'user',
  REQUEST = 'request',
  FARM = 'farm',
  CULTIVAR = 'cultivar',
  NEWS = 'news',
  MODEL = 'models',
  SCENARIO = 'scenario',
}

export function omitUserPassword(user: User): User {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...newUser } = user;
  return newUser as User;
}
