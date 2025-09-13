"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
var user_1 = require("./user");
var product_1 = require("./product");
var node_1 = require("./node");
var log_1 = require("./log");
var config_1 = require("./config");
var admin_1 = require("./admin");
var plan_1 = require("./plan");
var sequelize = new sequelize_1.Sequelize(process.env.DATABASE_URL || 'sqlite::memory:');
exports.sequelize = sequelize;
var models = {
    User: (0, user_1.defineUser)(sequelize),
    Product: (0, product_1.defineProduct)(sequelize),
    Node: (0, node_1.defineNode)(sequelize),
    Log: (0, log_1.defineLog)(sequelize),
    Config: (0, config_1.defineConfig)(sequelize),
    Admin: (0, admin_1.defineAdmin)(sequelize),
    Plan: (0, plan_1.definePlan)(sequelize),
};
exports.models = models;
Object.values(models).forEach(function (model) {
    if (model.associate) {
        model.associate(models);
    }
});
//# sourceMappingURL=index.js.map