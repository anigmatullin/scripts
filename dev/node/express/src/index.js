const { query } = require('express')
const express = require('express')
const routes = require('./routes.js');


const app = express()

const models = require('../models')
const Mail = require('../rmodels/Mail.js');

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("../public"))
app.use('/', routes);

app.set("view engine", "ejs")
app.set('views', "../views");
app.set("appName", "NGM Mail Router")
app.set("x-powered-by", false)


initModelLinks(models);

function initModelLinks(models)
{
    models.MailAddr.belongsToMany(models.Transaction, { through: 'linkAddrTransaction' });
    models.Transaction.belongsToMany(models.MailAddr, { through: 'linkAddrTransaction' });
}

app.listen(3000)

console.log("[app] mode: " + app.get("env"));
