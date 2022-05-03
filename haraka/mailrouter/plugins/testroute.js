const mimelib = require('mimelib');
const fs = require('fs');
const { runInThisContext } = require('vm');

const cfgfile = '../config/routing.json';

function showUsageExit()
{
    console.error("Sender is not specified");
    console.log(`
    Usage:
    node testroute.js <sender@domain> <rcpt@domain2>
    `);
    process.exit(1);
}

function getDomain(addr)
{
    let domain = addr.substring(addr.lastIndexOf('@') + 1);
    return domain;
}


function getRelays(cfg_relays)
{
    let relays = new Map();

    cfg_relays.forEach(obj => {
        relays.set(obj.name, obj);
    });

    return relays;
}


class Route
{
    //should have a constructor
    //and 4 variables of function type
    //variables are created in consctructor
    //based on route details.
    //if predicate is falsy - it means it is not checked and the corresponding funciton just returns true
    //if predicate is true - create function which check the predicate

    relay = "";
    checkSender;
    checkSenderDomain;
    checkRcpt;
    checkRcptDomain;

    match(sender, rcpt)
    {
        let senderdomain = getDomain(sender);
        let rcptdomain = getDomain(rcpt);

        let res = this.checkSender(sender) &&
                this.checkSenderDomain(senderdomain) &&
                this.checkRcpt(rcpt) &&
                this.checkRcptDomain(rcptdomain);
        
        return res;
    }

    getCheckerFunction(param)
    {
        param = param.toString();

        if (param) {
            return function(val) {
                if (val == param) {
                    return true;
                }
                return false;
            }
        }
        else {
            return function(val) {
                return true;
            }            
        }
    }

    constructor(relay, sender, sender_domain, rcpt, rcpt_domain)
    {
        this.relay = relay;
        this.checkSender = this.getCheckerFunction(sender);
        this.checkSenderDomain = this.getCheckerFunction(sender_domain);
        this.checkRcpt = this.getCheckerFunction(rcpt);
        this.checkRcptDomain = this.getCheckerFunction(rcpt_domain);
    }
}

/////////////////////////////

class RoutingTable
{
    routes = [];
    relays = [];

    constructor(relays, routes)
    {
        this.relays = relays;
        this.routes = routes;
    }


    findRoute(sender, rcpt)
    {
        function findFn(route)
        {
            let matched = route.match(sender, rcpt);
            return matched;
        };

        let foundRoute = routes.find(findFn);

        if (!foundRoute) {
            return false;
        }

        let routename = foundRoute.relay;
        let foundRelay = relays.get(routename);

        return foundRelay;
    }
}


function getRoutes()
{
    let routes = new Array();

    cfg.routes.forEach(param => {
        let route = new Route(param.relay, param.sender, param.sender_domain, param.rcpt, param.rcpt_domain);
        routes.push(route);
    });

    return routes;
}

function getConfig(path)
{
    let jsoncfg = fs.readFileSync(path);
    return JSON.parse(jsoncfg);
}


//params: sender rcpt
//get params

let sender = process.argv[2];
let rcpt = process.argv[3];

if (!sender) {
    showUsageExit();
}

if (!rcpt) {
    showUsageExit();
}



let cfg = getConfig(cfgfile);
let relays = getRelays(cfg.relays);
let routes = getRoutes(cfg.routes);
let rtable = new RoutingTable(relays, routes);

let relay = rtable.findRoute(sender, rcpt);

console.log(relay);

//get matched route | print
