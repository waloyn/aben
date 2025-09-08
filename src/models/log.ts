
import { Sequelize, DataTypes, Model } from 'sequelize';

export class Log extends Model {
  public id!: number;
  public message!: string;
  public level!: string;
}

export const defineLog = (sequelize: Sequelize) => {
  Log.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    message: {
      type: new DataTypes.STRING(1024),
      allowNull: false,
    },
    level: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  }, {
    tableName: 'logs',
    sequelize,
  });
  return Log;
};
