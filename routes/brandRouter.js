const express = require('express');
const router = express.Router();
const brandControllers = require('../controllers/brandController');

router
    .route('/brands')
    .get(brandControllers.getAllBrands)
    .post(brandControllers.createBrand)
router
.route('/:id')
    .patch(brandControllers.updateBrand)
    .delete(brandControllers.deleteBrand)

module.exports = router;