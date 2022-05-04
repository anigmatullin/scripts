const fs = require('fs');

const logfile = '/tmp/haraka/haraka.log';
const cfgrouting = 'routing.json';
const cfgrelays  = 'relays.json';

let relays;
let routes;
let rtable;


/**
 *

+ use haraka way to load configs
- how do we find out actual rcpt addr among list of rcpt?
- log to web service

getAddr(hmail.todo.mail_from)
getAddr(hmail.todo.rcpt_to[0])

hmail.todo:

  "rcpt_to": [
    {
      "original": "<addr@localhost>",
      "original_host": "localhost",
      "host": "localhost",
      "user": "addr"
    }
  ],
  "mail_from": {
    "original": "<addr@test.com>",
    "original_host": "test.com",
    "host": "test.com",
    "user": "addr"
  }

 */


exports.hook_get_mx = function (next, hmail, domain)
{
    let sender = getAddr(hmail.todo.mail_from);
    let rcpt = getAddr(hmail.todo.rcpt_to[0]);
    let relay = rtable.findRoute(sender, rcpt);

    jsonlog(relay);

    return next(OK, relay);
}


exports.hook_delivered = function (next, hmail, params) {

    return next();
}

exports.register = function()
{
    relays = exports.getRelays(cfgrelays);
    routes = exports.getRoutes(cfgrouting);
    rtable = new RoutingTable(relays, routes);

    // this.register_hook('delivered', 'hook_delivered');
};


function getAddr(addr)
{
    let res = addr.user + "@" + addr.host;
    return res;
}

function log(msg)
{
    fs.appendFile(logfile, msg + "\n", err => {
        if (err) {
        }
        //file written successfully
    });    
}

function censor(censor) {
    var i = 0;
    
    return function(key, value) {
      if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value) 
        return '[Circular]'; 
      
      if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
        return '[Unknown]';
      
      ++i; // so we know we aren't using the original object anymore
      
      return value;  
    }
}


function jsonlog(obj)
{
    let str = JSON.stringify(obj, censor(obj));
    log(str);
    return str;
}


function getDomain(addr)
{
    let domain = addr.substring(addr.lastIndexOf('@') + 1);
    return domain;
}


exports.getRelays = function (path)
{
    let relays = this.config.get(path, 'json');
    return relays;
}

exports.getRoutes = function (path)
{
    let cfgobj = this.config.get(path, 'json');
    let cfg = Object.values(cfgobj);

    let routes = new Array();

    cfg.forEach(param => {
        let route = new Route(param.relay, param.sender, param.sender_domain, param.rcpt, param.rcpt_domain);
        routes.push(route);
    });

    return routes;
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

        let relayname = foundRoute.relay;
        let relayexists = relayname in relays;

        if (!relayexists) {
            console.error("Configuration Error!");
            console.error(`Relay "${relayname}" defined in Routing \nBut cannot be found among relays \nPlease review configuration!\n`);
            return false;
        }
        else {
            let foundRelay = relays[relayname];
            return foundRelay;
        }
    }
}
