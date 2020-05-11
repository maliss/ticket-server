import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Tickets extends Model<Tickets> {
  @Column
  title: string;

  @Column
  description: string;
}
