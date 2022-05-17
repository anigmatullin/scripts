const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))
app.set("view engine", "ejs")
app.listen(3000)

let mails = [];
let delivery = [];
let connection = [];
let name = "Cat";

app.get("/", (req, res) => {
    // res.json(delivery);
    res.render("delivery", {delivery: delivery});
});

app.get("/about", (req, res) => {
    res.render("about", {thename: name});
});

app.get("/contacts", (req, res) => {
    res.send("Salam!");
});

app.get("/form", (req, res) => {
    res.render("form");
});

app.post("/form", (req, res) => {
    let m = req.body.mail;
    mails.push(m);
    res.redirect("/");
});

app.post("/api/delivery", (req, res) => {
    console.log(req.body);
    delivery.push(req.body);
    res.send("OK: ");
});

app.post("/api/connection", (req, res) => {
    console.log(req.body);
    connection.push(req.body);
    res.send("OK");
});

app.get("/api/delivery", (req, res) => {

    for (let i=0; i<delivery.length; i++) {
        delivery[i].recid = i;
    }

    let resp = {
        total: delivery.length,
        records: delivery
    }
    res.json(resp);
});


app.get("/api/connection", (req, res) => {

    for (let i=0; i<connection.length; i++) {
        connection[i].recid = i;
    }

    let resp = {
        total: connection.length,
        records: connection
    }
    res.json(resp);
});