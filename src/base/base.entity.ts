import { Column, PrimaryColumn } from 'typeorm';

export class BaseEntityClass {
  @PrimaryColumn('varchar', { length: 72 })
  id: string;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
