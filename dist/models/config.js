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
exports.defineConfig = exports.Config = void 0;
var sequelize_1 = require("sequelize");
var Config = /** @class */ (function (_super) {
    __extends(Config, _super);
    function Config() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Config.associate = function (models) {
        // No associations for now
    };
    return Config;
}(sequelize_1.Model));
exports.Config = Config;
var defineConfig = function (sequelize) {
    Config.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        key: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
            unique: true,
        },
        value: {
            type: new sequelize_1.DataTypes.STRING(1024),
            allowNull: false,
        },
    }, {
        tableName: 'configs',
        sequelize: sequelize,
    });
    return Config;
};
exports.defineConfig = defineConfig;
//# sourceMappingURL=config.js.map