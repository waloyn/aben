"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var configController_1 = require("../controllers/configController");
var router = (0, express_1.Router)();
router.get('/', configController_1.getAllConfigs);
router.get('/:id', configController_1.getConfigById);
router.post('/', configController_1.createConfig);
router.put('/:id', configController_1.updateConfig);
router.delete('/:id', configController_1.deleteConfig);
exports.default = router;
//# sourceMappingURL=configRoutes.js.map