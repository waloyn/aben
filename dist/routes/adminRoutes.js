"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var adminController_1 = require("../controllers/adminController");
var auth_1 = require("../middleware/auth");
var router = (0, express_1.Router)();
router.post('/login', adminController_1.login);
router.post('/change-password', auth_1.authenticate, adminController_1.changePassword);
exports.default = router;
//# sourceMappingURL=adminRoutes.js.map