const express = require('express');
const router = express.Router();
const providerControllers = require('./../controllers/providerController');

router
    .route('/')
    .get(providerControllers.getAllProviders)
    .post(providerControllers.createProvider)
router
    .route('/:id')
    .patch(providerControllers.updateProvider)
    .delete(providerControllers.deleteProvider)

module.exports = router;