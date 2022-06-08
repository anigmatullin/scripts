const express = require('express');
const router = express.Router();

const models = require('../../models')
const Mail = require('../../rmodels/Mail.js');
const functions = require('../functions.js');

module.exports = router;

router.get("/relaygrp", (req, res) => {

    // let params = {
    //     data: [
    //         {
    //             id: 1,
    //             name: "Exch",
    //             description: "Inbound"
    //         },
    //         {
    //             id: 2,
    //             name: "Outbound",
    //             description: "Cloud Mail"
    //         },
    //     ]
    // };

    models.RelayGroup.findAll()
    .then(data => {
        let params = {
            data: data
        };
        
        res.render("routing/index.ejs", params);
    })
    
});
