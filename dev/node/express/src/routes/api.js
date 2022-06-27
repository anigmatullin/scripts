const express = require('express');
const router = express.Router();

const models = require('../../models')
const Mail = require('../../rmodels/Mail.js');
const functions = require('../functions.js');

module.exports = router;

router.post("/delivery", (req, res) => {
    models.Delivery.create(req.body);
    res.send("OK: ");
});

router.get("/delivery", (req, res) => {

    functions.getData(models.Delivery, req.query.request)
    .then(functions.prepareRes)
    .then(resp => res.json(resp));
});



router.post("/connection", (req, res) => {
    models.Connection.create(req.body);
    res.send("OK");
});

router.get("/connection", (req, res) => {

    // res.set('Access-Control-Allow-Origin', '*');

    functions.getData(models.Connection, req.query.request)
    .then(functions.prepareRes)
    .then(resp => res.json(resp));

});


router.post("/queue", (req, res) => {

    // console.log(req.body);

    let m = new Mail(req.body);
    m.save();
    res.send("OK");
});

router.get("/queue", (req, res) => {

    functions.getData(models.Transaction, req.query.request)
    .then(functions.prepareRes)
    .then(resp => res.json(resp));
});

router.get("/hashlookups", (req, res) => {

    functions.getData(models.v_lookup, req.query.request)
    .then(functions.prepareRes)
    .then(resp => res.json(resp));
});
