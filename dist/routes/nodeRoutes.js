"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var nodeController_1 = require("../controllers/nodeController");
var router = (0, express_1.Router)();
router.get('/', nodeController_1.getAllNodes);
router.get('/:id', nodeController_1.getNodeById);
router.post('/', nodeController_1.createNode);
router.put('/:id', nodeController_1.updateNode);
router.delete('/:id', nodeController_1.deleteNode);
exports.default = router;
//# sourceMappingURL=nodeRoutes.js.map