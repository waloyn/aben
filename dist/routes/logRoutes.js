"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var logController_1 = require("../controllers/logController");
var router = (0, express_1.Router)();
router.get('/', logController_1.getAllLogs);
router.get('/:id', logController_1.getLogById);
router.post('/', logController_1.createLog);
router.put('/:id', logController_1.updateLog);
router.delete('/:id', logController_1.deleteLog);
exports.default = router;
//# sourceMappingURL=logRoutes.js.map