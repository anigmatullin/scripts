const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv');

const routes = require('./routes/root.js');
const routesLog = require('./routes/log.js');
const routesApi = require('./routes/api.js');
const routesFilter = require('./routes/filter.js');
const routesConfig = require('./routes/config-relay.js');
const corsConfig = require('./cors.js');

const models = require('../models')
const Mail = require('../rmodels/Mail.js');

dotenv.config();
const app = express();

const logger = function (req, res, next) {

    const logdata = {};
    logdata.url = req.protocol + '://' + req.get('host') + req.originalUrl;
    logdata.path = req.path;
    logdata.query = req.originalUrl;
    logdata.method = req.method;
    logdata.contentype = req.get('Content-Type');
    logdata.protocol = req.protocol;
    logdata.src_ip = req.ip;
    logdata.src_port = req.socket.remotePort;
    logdata.referer = req.header('Referrer') || req.header('Referer');
    logdata.userAgent = req.header('User-agent');
    logdata.origin = req.header('Origin');
    logdata.user = "-";

    models.Log.create(logdata);

    console.log(logdata);
    next()
  }
  
app.use(logger);

const corsOptions = corsConfig();
console.log(corsOptions);
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("./public"))

app.use('/', routes);
app.use('/log', routesLog);
app.use('/api', routesApi);
app.use('/filter', routesFilter);
app.use('/config', routesConfig);

app.set("view engine", "ejs")
app.set('views', "./views");
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
