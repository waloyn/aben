"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.definePlan = exports.Plan = void 0;
var sequelize_1 = require("sequelize");
var Plan = /** @class */ (function (_super) {
    __extends(Plan, _super);
    function Plan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Plan.associate = function (models) {
        // A plan can have many users
        this.hasMany(models.User, {
            foreignKey: 'pid',
            as: 'users',
        });
        this.belongsTo(models.Node, {
            foreignKey: 'level',
            as: 'nodes',
        });
    };
    return Plan;
}(sequelize_1.Model));
exports.Plan = Plan;
var definePlan = function (sequelize) {
    Plan.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        data: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: false,
        },
        level: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        rate: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        connections: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize: sequelize,
        tableName: 'plans', // Explicitly set the table name
        modelName: 'Plan',
    });
    return Plan;
};
exports.definePlan = definePlan;
//# sourceMappingURL=plan.js.map