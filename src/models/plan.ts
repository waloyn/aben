
import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '.';

interface PlanAttributes {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface PlanCreationAttributes extends Optional<PlanAttributes, 'id'> {}

class Plan extends Model<PlanAttributes, PlanCreationAttributes> implements PlanAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public description!: string;
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
