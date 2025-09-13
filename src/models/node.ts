import { Sequelize, DataTypes, Model } from 'sequelize';

export class Node extends Model {
  public id!: number;
  public name!: string;
  public ip!: string;
  public port!: number;
  public level!: number;
  public rate!: number;

  public static associate(models: any) {
    // A node belongs to a user
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'users',
    });
    this.hasMany(models.Plan, {
      foreignKey: 'level',
      as: 'plans',
    });
  }
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
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  }, {
    tableName: 'nodes',
    sequelize,
  });
  return Node;
};
