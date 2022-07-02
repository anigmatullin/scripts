const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/root');

/* GET home page. */
router.get('/', ctrl.index);

module.exports = router;
