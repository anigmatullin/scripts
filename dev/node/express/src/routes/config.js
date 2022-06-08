const express = require('express');
const router = express.Router();

const models = require('../../models')
const Mail = require('../../rmodels/Mail.js');
const functions = require('../functions.js');

module.exports = router;

router.get("/relaygrp", (req, res) => {    
    res.render("routing/index.ejs", {});
});
