"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productController_1 = require("../controllers/productController");
var router = (0, express_1.Router)();
router.get('/', productController_1.getAllProducts);
router.get('/:id', productController_1.getProductById);
router.post('/', productController_1.createProduct);
router.put('/:id', productController_1.updateProduct);
router.delete('/:id', productController_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=productRoutes.js.map