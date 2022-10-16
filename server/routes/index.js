const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.post('/order', indexController.order_POST);

module.exports = router;