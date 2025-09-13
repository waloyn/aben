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
exports.defineLog = exports.Log = void 0;
var sequelize_1 = require("sequelize");
var Log = /** @class */ (function (_super) {
    __extends(Log, _super);
    function Log() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Log.associate = function (models) {
        // A log belongs to a user
        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'users',
        });
    };
    return Log;
}(sequelize_1.Model));
exports.Log = Log;
var defineLog = function (sequelize) {
    Log.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        message: {
            type: new sequelize_1.DataTypes.STRING(1024),
            allowNull: false,
        },
        level: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
    }, {
        tableName: 'logs',
        sequelize: sequelize,
    });
    return Log;
};
exports.defineLog = defineLog;
//# sourceMappingURL=log.js.map