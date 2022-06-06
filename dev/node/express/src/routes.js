const express = require('express');
const router = express.Router();

const models = require('../models')
const Mail = require('../rmodels/Mail.js');
const functions = require('./functions.js');

module.exports = router;


let delivery = [];
let connection = [];
let queue = [];

router.get("/", (req, res) => {
    // res.json(delivery);
    res.render("delivery", {delivery: delivery});
});

// app.get("/about", (req, res) => {
//     res.render("about", {thename: 'Test'});
// });

// app.get("/form", (req, res) => {
//     res.render("form");
// });

// app.post("/form", (req, res) => {
//     let m = req.body.mail;
//     mails.push(m);
//     res.redirect("/");
// });

router.post("/api/delivery", (req, res) => {
    // console.log(req.body);
    delivery.push(req.body);
    models.Delivery.create(req.body);
    res.send("OK: ");
});

router.get("/api/delivery", (req, res) => {

    functions.getData(models.Delivery, req.query.request)
    .then(functions.prepareRes)
    .then(resp => res.json(resp));

});




router.post("/api/connection", (req, res) => {
    connection.push(req.body);
    models.Connection.create(req.body);
    res.send("OK");
});

router.get("/api/connection", (req, res) => {

    functions.getData(models.Connection, req.query.request)
    .then(prepareRes)
    .then(resp => res.json(resp));

});


// 3d2a16853ea8014cd81550d88f0bc690

router.post("/api/queue", (req, res) => {
    console.log(req.body);
    queue.push(req.body);

    // models.MailAddr.upsert({
    //     name: "rcpt",
    //     email: "rcpt@ngm.dev"
    //   }).then(([instance, created]) => {
    //     // what to do on returned values
    //   });

    // models.Transaction.create(req.body)
    //     .then();

    let m = new Mail(req.body);
    m.save();

    res.send("OK");
});

router.get("/api/queue", (req, res) => {

    functions.getData(models.Transaction, req.query.request)
    .then(prepareRes)
    .then(resp => res.json(resp));
});


// 3d2a16853ea8014cd81550d88f0bc690

router.post("/filter/md5", (req, res) => {
    
    console.log(req.body);

    functions.checkMD5(req.body)
    .then(data => {

        let ok = true;
        
        if (data.length) {
            ok = false;
        }

        return ok;
    })
    .then(ok => {

        if (ok) {
            res.send({action: "allow"});
        }
        else {
            res.send({action: "block"});
        }

    })

    // req.body.forEach(item => {
    //     if (item?.md5 == "3d2a16853ea8014cd81550d88f0bc690") {
    //         ok = false;
    //     }
    // });


});
