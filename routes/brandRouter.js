const express = require('express');
const router = express.Router();
const brandControllers = require('../controllers/brandController');

router
    .route('/')
    .get(brandControllers.getAllBrands)
    .post(brandControllers.createBrand)
router
.route('/:id')
    .get(brandControllers.getAllBrands)
    .patch(brandControllers.updateBrand)
    .delete(brandControllers.deleteBrand)

module.exports = router;