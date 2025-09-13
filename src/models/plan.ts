import { Model, DataTypes, Sequelize } from 'sequelize';

export class Plan extends Model {
  public id!: number;
  public name!: string;
  public price!: number;
  public data!: number;
  public level!: number;
  public rate!: number;
  public connections!: number;
  public description!: string;

  public static associate(models: any) {
    // A plan can have many users
    this.hasMany(models.User, {
      foreignKey: 'pid',
      as: 'users',
    });
    this.belongsTo(models.Node, {
      foreignKey: 'level',
      as: 'nodes',
    });
  }
}

export const definePlan = (sequelize: Sequelize) => {
  Plan.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      data: {
        type: DataTypes.BIGINT,
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
        defaultValue: 0,
      },
      connections: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'plans', // Explicitly set the table name
      modelName: 'Plan',
    }
  );
  return Plan;
};
