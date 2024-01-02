import { BaseEntityClass } from 'src/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Cultivar extends BaseEntityClass {
  @Column('text')
  name: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('text', { nullable: true })
  image: string;

  @Column('text', { nullable: true })
  category: string;
}
