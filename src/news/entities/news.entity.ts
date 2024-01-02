import { BaseEntityClass } from 'src/base/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('news')
export class News extends BaseEntityClass {
  @Column('text')
  title: string;

  @Column('text', { nullable: true })
  image: string;

  @Column('text', { nullable: true })
  link: string;

  @Column('text')
  category: string;

  @Column('text')
  content: string;

  //   @ManyToOne(() => User, (user) => user.id, { eager: true })
  //   user: User;
}
