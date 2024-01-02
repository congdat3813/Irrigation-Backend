import { BaseEntityClass } from 'src/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Model extends BaseEntityClass {
  @Column('text')
  name: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('text', { nullable: true })
  provider: string;
}
