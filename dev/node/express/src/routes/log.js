const express = require('express');
const router = express.Router();

const models = require('../../models')
const Mail = require('../../rmodels/Mail.js');
const functions = require('../functions.js');

module.exports = router;

router.get("/delivery", (req, res) => {
    res.render("log-delivery", {});
});

router.get("/connection", (req, res) => {
    res.render("log-connection", {});
});

router.get("/mails", (req, res) => {
    res.render("log-mails", {});
});

router.get("/lookups", (req, res) => {
    res.render("log-lookups", {});
});
