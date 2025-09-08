"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var express_1 = __importDefault(require("express"));
var models_1 = require("./models");
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var productRoutes_1 = __importDefault(require("./routes/productRoutes"));
var nodeRoutes_1 = __importDefault(require("./routes/nodeRoutes"));
var logRoutes_1 = __importDefault(require("./routes/logRoutes"));
var configRoutes_1 = __importDefault(require("./routes/configRoutes"));
var adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
var planRoutes_1 = __importDefault(require("./routes/planRoutes"));
var auth_1 = require("./middleware/auth");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/admins', adminRoutes_1.default);
app.use('/api/users', auth_1.authenticate, userRoutes_1.default);
app.use('/api/products', auth_1.authenticate, productRoutes_1.default);
app.use('/api/nodes', auth_1.authenticate, nodeRoutes_1.default);
app.use('/api/logs', auth_1.authenticate, logRoutes_1.default);
app.use('/api/configs', auth_1.authenticate, configRoutes_1.default);
app.use('/api/plans', auth_1.authenticate, planRoutes_1.default);
app.get('/', function (req, res) {
    var name = process.env.NAME || 'World';
    res.send("Hello ".concat(name, "!"));
});
var port = parseInt(process.env.PORT || '3000');
models_1.sequelize.authenticate()
    .then(function () {
    console.log('Connection has been established successfully.');
    return models_1.sequelize.sync({ alter: true });
})
    .then(function () {
    app.listen(port, function () {
        console.log("listening on port ".concat(port));
    });
})
    .catch(function (err) {
    console.error('Unable to connect to the database:', err);
});
//# sourceMappingURL=index.js.map