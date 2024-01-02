import { BaseEntityClass } from 'src/base/base.entity';
import { Farm } from 'src/farms/entities/farm.entity';
import { Model } from 'src/models/entities/model.entity';
import { Column, ManyToOne } from 'typeorm';

export class Scenario extends BaseEntityClass {
  @Column('text', { nullable: true })
  name: string;

  @ManyToOne(() => Model, (model) => model.id, { eager: true })
  model: Model;

  @ManyToOne(() => Farm, (farm) => farm.id, { eager: true })
  farm: Farm;

  @Column('text')
  time: string;

  @Column('int')
  duration: number;

  @Column('int')
  amount: number;
}
