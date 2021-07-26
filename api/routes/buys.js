const express = require('express');
const router = express.Router();

const buysController = require('../controllers/buys')

router.get('/', buysController.index)
module.exports = router;