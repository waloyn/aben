"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var planController_1 = require("../controllers/planController");
var router = (0, express_1.Router)();
router.get('/', planController_1.getPlans);
router.get('/:id', planController_1.getPlanById);
router.post('/', planController_1.createPlan);
router.put('/:id', planController_1.updatePlan);
router.delete('/:id', planController_1.deletePlan);
exports.default = router;
//# sourceMappingURL=planRoutes.js.map