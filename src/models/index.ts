
import { Sequelize } from 'sequelize';
import { defineUser } from './user';
import { defineProduct } from './product';
import { defineNode } from './node';
import { defineLog } from './log';
import { defineConfig } from './config';
import { defineAdmin } from './admin';

const sequelize = new Sequelize(process.env.DATABASE_URL || 'sqlite::memory:');

const models = {
  User: defineUser(sequelize),
  Product: defineProduct(sequelize),
  Node: defineNode(sequelize),
  Log: defineLog(sequelize),
  Config: defineConfig(sequelize),
  Admin: defineAdmin(sequelize),
};

Object.values(models).forEach(model => {
  if (model.associate) {
    model.associate(models);
  }
});

export { sequelize, models };
