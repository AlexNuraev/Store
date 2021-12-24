const express = require('express');
const router = express.Router();
const productControllers = require('./../controllers/productController');

router
    .route('/')
    .get(productControllers.getAllProducts)
    .post(productControllers.createProduct)
router
    .route('/:id')
    .get(productControllers.getProduct)
    .patch(productControllers.updateProduct)
    .delete(productControllers.deleteProduct)

module.exports = router;