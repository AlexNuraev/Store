const express = require('express');
const router = express.Router();
const shirtControllers = require('./../controllers/shirtController');


router
    .route('/')
    .get(shirtControllers.getAllShirts)
    .post(shirtControllers.createShirt)
router
    .route('/:id')
    .patch(shirtControllers.updateShirt)
    .delete(shirtControllers.deleteShirt)

module.exports = router;