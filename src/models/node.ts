
import { Sequelize, DataTypes, Model } from 'sequelize';

export class Node extends Model {
  public id!: number;
  public name!: string;
  public ip!: string;
  public port!: number;
}

export const defineNode = (sequelize: Sequelize) => {
  Node.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    ip: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    port: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'nodes',
    sequelize,
  });
  return Node;
};
