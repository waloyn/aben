"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var authenticate = function (req, res, next) {
    var authHeader = req.headers.authorization;
    if (authHeader) {
        var token = authHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'mysecret', function (err, user) {
            if (err) {
                return res.status(403).json({ error: 'Forbidden' });
            }
            req.user = user;
            next();
        });
    }
    else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};
exports.authenticate = authenticate;
//# sourceMappingURL=auth.js.map