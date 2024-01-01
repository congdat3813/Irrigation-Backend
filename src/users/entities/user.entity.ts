import { BaseEntityClass } from 'src/base/base.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user')
export class User extends BaseEntityClass {
  @PrimaryColumn('varchar', { length: 41 })
  id: string;

  @Column('varchar', { length: 255 })
  username: string;

  @Column('text', { nullable: true })
  avatar: string;

  @Column('varchar', { length: 255, nullable: true })
  firstName: string;

  @Column('varchar', { length: 255, nullable: true })
  lastName: string;

  @Column('varchar', { length: 255, nullable: true })
  email: string;

  @Column('varchar', { length: 255, nullable: true })
  phone: string;

  @Column('varchar', { length: 255, nullable: true })
  address: string;

  @Column('varchar', { length: 255, nullable: true })
  city: string;

  @Column('varchar', { length: 255, nullable: true })
  province: string;

  @Column('varchar', { length: 255, nullable: true })
  country: string;

  @Column('varchar', { length: 255, nullable: true })
  role: string;

  @Column('varchar', { length: 255 })
  password: string;

  @Column('boolean', { default: false })
  isActive: boolean;
}
