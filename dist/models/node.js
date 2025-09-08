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
exports.defineNode = exports.Node = void 0;
var sequelize_1 = require("sequelize");
var Node = /** @class */ (function (_super) {
    __extends(Node, _super);
    function Node() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Node;
}(sequelize_1.Model));
exports.Node = Node;
var defineNode = function (sequelize) {
    Node.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        ip: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        port: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'nodes',
        sequelize: sequelize,
    });
    return Node;
};
exports.defineNode = defineNode;
//# sourceMappingURL=node.js.map