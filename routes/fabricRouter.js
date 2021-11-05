const express = require('express');
const router = express.Router();
const fabricControllers = require('./../controllers/fabricController');

router
    .route('/')
    .get(fabricControllers.getAllFabric)
    .post(fabricControllers.createFabric)
router
.route('/:id')
    .patch(fabricControllers.updateFabric)
    .delete(fabricControllers.deleteFabric)

module.exports = router;