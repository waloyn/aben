
import { Dialect } from 'sequelize';

export const config = {
  development: {
    dialect: 'sqlite' as Dialect,
    storage: 'database.sqlite'
  },
  test: {
    dialect: 'sqlite' as Dialect,
    storage: ':memory:'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: process.env.DB_DIALECT as Dialect,
  }
};
