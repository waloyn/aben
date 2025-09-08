
import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '.';

interface PlanAttributes {
  id: number;
  name: string;
  price: number;
  level: number;
  type: string;
  days: number;
  bytes: bigint;
  conns: number;
  qps: number;
  rates: number;
  description: string;
  readonly deletedAt: Date;
}

interface PlanCreationAttributes extends Optional<PlanAttributes, 'id'  | 'deletedAt'> {}

class Plan extends Model<PlanAttributes, PlanCreationAttributes> implements PlanAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public level!: number;
  public type!: string;
  public days!: number;
  public bytes!: bigint;
  public conns!: number;
  public qps!: number;
  public rates!: number;
  public description!: string;
  public readonly deletedAt!: Date;
}

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
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    days: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bytes: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    conns: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rates: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  },
  {
    sequelize,
    tableName: 'plans',
    timestamps: true,
    paranoid: true,
    underscored: true,
  }
);

export default Plan;
