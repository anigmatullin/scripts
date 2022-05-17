const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))
app.set("view engine", "ejs")
app.listen(3000)

let mails = [];
let delivery = [];
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

app.post("/log", (req, res) => {
    console.log(req.body);
    delivery.push(req.body);
    res.send("OK: ");
});

/*

{
    "total": 2,
    "records": [
        { "recid": 1, "fname": "Aibulat", "lname": "Nigmatullin", "email": "nigmatullin@gmail.com" },
        { "recid": 2, "fname": "Yulai", "lname": "Nigmatullin", "email": "ngmYulai@gmail.com"}
    ]
}

*/




app.get("/logs", (req, res) => {
    let resp = {
        total: delivery.length,
        records: delivery
    }
    res.json(resp);
});
