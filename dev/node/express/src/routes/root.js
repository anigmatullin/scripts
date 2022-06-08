const express = require('express');
const router = express.Router();

module.exports = router;

router.get("/", (req, res) => {
    // res.json(delivery);
    res.render("index", {});
});


// app.get("/form", (req, res) => {
//     res.render("form");
// });

// app.post("/form", (req, res) => {
//     let m = req.body.mail;
//     mails.push(m);
//     res.redirect("/");
// });
