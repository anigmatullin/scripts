const express = require('express');
const router = express.Router();

const models = require('../../models')
const CtrlRelayGroup = require('../controllers/CtrlRelayGroup.js');
const CtrlRelay = require('../controllers/CtrlRelay.js');

module.exports = router;

let ctrlRelayGroup = new CtrlRelayGroup();
let ctrlRelay = new CtrlRelay();


router.get("/relay/create", ctrlRelay.create);

router.get("/relaygrp/create", ctrlRelayGroup.create);
router.post("/relaygrp/create", ctrlRelayGroup.createHandle);


router.get("/relaygrp/edit/:id", (req, res) => {

    let id = +req.params.id;

    models.RelayGroup.findByPk(id)
        .then(data => {

            let params = {
                data: data
            };

            res.render("routing/relaygrp-edit.ejs", params);
        
        });

});


router.post("/relaygrp/edit/:id", (req, res) => {

    let id = +req.params.id;

    models.RelayGroup.findByPk(id)
        .then(async data => {
            await data.update(req.body);
            await data.save();
        })
        .then(inp => {
            let url = "/config/relaygrp";
            res.redirect(url);
        });

});


router.get("/relaygrp/delete/:id", (req, res) => {

    let id = +req.params.id;

    models.RelayGroup.findByPk(id)
        .then(data => {

            let params = {
                data: data
            };

            res.render("routing/relaygrp-delete.ejs", params);
        
        });

});


router.post("/relaygrp/delete/:id", (req, res) => {

    let id = +req.params.id;

    models.RelayGroup.findByPk(id)
        .then(async data => {
            await data.destroy();
        })
        .then(inp => {
            let url = "/config/relaygrp";
            res.redirect(url);
        });

});


router.get("/relaygrp/:id", async (req, res) => {

    let id = +req.params.id;

    let op = {
        where: {
            group_id: id
        }
    };

    let relays = await models.Relay.findAll(op);

    models.RelayGroup.findByPk(id)
    .then(data => {

        let params = {
            data: data,
            relays: relays,
        };

        res.render("routing/relaygrp-details.ejs", params);
    })
    
});


router.get("/relaygrp", (req, res) => {

    models.RelayGroup.findAll()
    .then(data => {

        let params = {
            data: data
        };

        res.render("routing/index.ejs", params);
    })
    
});

