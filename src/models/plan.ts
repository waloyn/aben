
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
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  description: string;
}

interface PlanCreationAttributes extends Optional<PlanAttributes, 'id'> {}

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
  public created_at!: Date;
  public updated_at!: Date;
  public deleted_at!: Date;
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },   
  },
  {
    sequelize,
    tableName: 'plans',
  }
);

export default Plan;
