const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/auth');

router.get('/', ctrl.checkToken, ctrl.index);
router.post('/login', ctrl.login);

module.exports = router;
