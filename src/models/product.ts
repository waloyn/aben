
import { Sequelize, DataTypes, Model } from 'sequelize';

export class Product extends Model {
  public id!: number;
  public name!: string;
  public price!: number;
}

export const defineProduct = (sequelize: Sequelize) => {
  Product.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }, {
    tableName: 'products',
    sequelize,
  });
  return Product;
};
