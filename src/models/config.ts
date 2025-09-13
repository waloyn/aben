
import { Sequelize, DataTypes, Model } from 'sequelize';

export class Config extends Model {
  public id!: number;
  public key!: string;
  public value!: string;

  public static associate(models: any) {
    // No associations for now
  }
}

export const defineConfig = (sequelize: Sequelize) => {
  Config.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    key: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    value: {
      type: new DataTypes.STRING(1024),
      allowNull: false,
    },
  }, {
    tableName: 'configs',
    sequelize,
  });
  return Config;
};
