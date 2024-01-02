import { BaseEntityClass } from 'src/base/base.entity';
import { Cultivar } from 'src/cultivars/entities/cultivar.entity';
import { Model } from 'src/models/entities/model.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Farm extends BaseEntityClass {
  @Column('text')
  name: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('text', { nullable: true })
  address: string;

  @Column('text', { nullable: true })
  image: string;

  @ManyToOne(() => Cultivar, (cultivar) => cultivar.id, { eager: true })
  cultivar: Cultivar;

  @ManyToOne(() => User, (user) => user.id, { eager: true })
  user: User;

  @ManyToOne(() => Model, (model) => model.id, { eager: true })
  model: Model;
}
