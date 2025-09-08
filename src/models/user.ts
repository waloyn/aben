
import { Sequelize, DataTypes, Model } from 'sequelize';

export class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public from_site!: string;
  public tid!: number;
  public level!: number;
  public all_bytes!: bigint;
  public use_bytes!: bigint;
  public blocked!: number;
  public unsub!: number;
  public emergency!: number;
  public created_at!: Date;
  public updated_at!: Date;
  public deleted_at!: Date;
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
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    from_site: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    tid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    all_bytes: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    use_bytes: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    blocked: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    unsub: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    emergency: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
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
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'users',
    sequelize,
  });
  return User;
};
