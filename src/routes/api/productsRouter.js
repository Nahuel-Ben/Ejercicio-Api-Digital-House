// ************ Require's ************
const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');
const {category} = require ('../../database/models/category')

// ************       Routes       ************

router.get('/latest', productsAPIController.latest);
router.get('/offers', productsAPIController.offers);
router.get('/:category?', productsAPIController.categories);


module.exports = router;
