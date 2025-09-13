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
exports.defineUser = exports.User = void 0;
var sequelize_1 = require("sequelize");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Define the association
    User.associate = function (models) {
        this.belongsTo(models.Plan, {
            foreignKey: 'pid',
            as: 'plans',
        });
    };
    return User;
}(sequelize_1.Model));
exports.User = User;
var defineUser = function (sequelize) {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        password: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        email: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        from_site: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        // Configure pid as a foreign key
        pid: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'plans', // This is the table name
                key: 'id',
            },
        },
        level: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        all_bytes: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: false,
        },
        use_bytes: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: false,
        },
        blocked: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        unsub: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        emergency: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        deleted_at: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true,
        },
    }, {
        tableName: 'users',
        sequelize: sequelize,
    });
    return User;
};
exports.defineUser = defineUser;
//# sourceMappingURL=user.js.map