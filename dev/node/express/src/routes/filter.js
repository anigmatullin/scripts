const express = require('express');
const router = express.Router();

const models = require('../../models')
const Mail = require('../../rmodels/Mail.js');
const functions = require('../functions.js');

module.exports = router;

router.post("/md5", (req, res) => {
    
    console.log(req.body);

    functions.hashListLookup(req.body)
        .then(result => {
            console.log(result);
            return result;
        })
        .then(result => {
            res.send({action: result});
        });

});
