"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var User = models_1.models.User, Product = models_1.models.Product, Node = models_1.models.Node, Log = models_1.models.Log, Config = models_1.models.Config, Admin = models_1.models.Admin;
var seedDatabase = function () { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, 9, 11]);
                // Connect to the database and sync models
                return [4 /*yield*/, models_1.sequelize.sync({ force: true })];
            case 1:
                // Connect to the database and sync models
                _a.sent(); // force: true will drop tables if they exist
                console.log('Database synced!');
                // Create Admin
                return [4 /*yield*/, Admin.create({
                        username: 'admin',
                        password: 'password', // will be hashed by the hook
                    })];
            case 2:
                // Create Admin
                _a.sent();
                console.log('Admin user created.');
                // Create Users
                return [4 /*yield*/, User.bulkCreate([
                        { name: 'Alice', email: 'alice@example.com' },
                        { name: 'Bob', email: 'bob@example.com' },
                    ])];
            case 3:
                // Create Users
                _a.sent();
                console.log('Users created.');
                // Create Products
                return [4 /*yield*/, Product.bulkCreate([
                        { name: 'Laptop', price: 1200 },
                        { name: 'Keyboard', price: 75 },
                        { name: 'Mouse', price: 25 },
                    ])];
            case 4:
                // Create Products
                _a.sent();
                console.log('Products created.');
                // Create Nodes
                return [4 /*yield*/, Node.bulkCreate([
                        { name: 'Node-1', ipAddress: '192.168.1.1' },
                        { name: 'Node-2', ipAddress: '192.168.1.2' },
                    ])];
            case 5:
                // Create Nodes
                _a.sent();
                console.log('Nodes created.');
                // Create Logs
                return [4 /*yield*/, Log.bulkCreate([
                        { level: 'info', message: 'Application started' },
                        { level: 'error', message: 'Something went wrong' },
                    ])];
            case 6:
                // Create Logs
                _a.sent();
                console.log('Logs created.');
                // Create Configs
                return [4 /*yield*/, Config.bulkCreate([
                        { key: 'theme', value: 'dark' },
                        { key: 'notifications', value: 'enabled' },
                    ])];
            case 7:
                // Create Configs
                _a.sent();
                console.log('Configs created.');
                console.log('Database seeded successfully!');
                return [3 /*break*/, 11];
            case 8:
                error_1 = _a.sent();
                console.error('Error seeding database:', error_1);
                return [3 /*break*/, 11];
            case 9: return [4 /*yield*/, models_1.sequelize.close()];
            case 10:
                _a.sent();
                return [7 /*endfinally*/];
            case 11: return [2 /*return*/];
        }
    });
}); };
seedDatabase();
//# sourceMappingURL=seed.js.map