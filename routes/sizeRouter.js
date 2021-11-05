const express = require('express');
const router = express.Router();
const sizeControllers = require('./../controllers/sizeController');

router
    .route('/')
    .get(sizeControllers.getAllSize)
    .post(sizeControllers.createSize)
router
    .route('/:id')
    .patch(sizeControllers.updateShirt)
    .delete(sizeControllers.deleteShirt)

module.exports = router;