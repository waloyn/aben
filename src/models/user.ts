
import { Sequelize, DataTypes, Model } from 'sequelize';

export class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
}

export const defineUser = (sequelize: Sequelize) => {
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  }, {
    tableName: 'users',
    sequelize,
  });
  return User;
};
