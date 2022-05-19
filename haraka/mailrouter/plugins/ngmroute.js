const fs = require('fs');
const fetch = require("node-fetch");

const functions = require("./functions");

const logfile = '/tmp/haraka/haraka.log';
const cfgrouting = 'routing.json';
const cfgrelays  = 'relays.json';

const url_delivery = "http://localhost:3000/api/delivery";
const url_conn = "http://localhost:3000/api/connection";
const url_queue = "http://localhost:3000/api/queue";

const Route = require('./Route');
const RoutingTable = require('./RoutingTable');

// import { RoutingTable } from './RoutingTable';

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
    let sender = functions.getAddr(hmail.todo.mail_from);
    let rcpt = functions.getAddr(hmail.todo.rcpt_to[0]);
    let relay = rtable.findRoute(sender, rcpt);

    // httplog(hmail.todo);
    // httplog(relay);

    return next(OK, relay);
}

exports.hook_connect = function (next, connection)
{
    connection.relaying = true;
    return next(CONT);
}


exports.hook_queue_outbound = function (next, connection)
{
    functions.log_connection(connection, url_conn);
    functions.log_transaction(connection.transaction, url_queue);
    return next(CONT);
}

// exports.hook_data = function (next, connection)
// {
//     functions.log_connection(connection, url_conn);
//     return next(CONT);
// }


exports.hook_delivered = function (next, hmail, params) {

    let host = params[0];
    let ip = params[1];
    let response = params[2];
    let delay = params[3];
    let port = params[4];
    let mode = params[5];
    let ok_recips = params[6];
    let secured = params[7];
    let authenticated = params[8];

    let logdata = {
        uuid: hmail.todo.uuid,
        dt: hmail.todo.queue_time,
        sender: functions.getAddr(hmail.todo.mail_from),
        rcpt_domain: hmail.todo.domain,
        rcpt_list: functions.getAddrList(hmail.todo.rcpt_to),
        rcpt_accepted: functions.getAddrList(ok_recips),
        tls_forced: hmail.force_tls,
        tls: secured,
        auth: authenticated,
        // todo: hmail.todo,
        host: host,
        ip: ip,
        port: port,
        response: response,
        delay: delay,
        // params: params
    }

    functions.httplog(logdata, url_delivery);
    // httplog(JSON.stringify("+++++++++++++++++++++++++"))
    // httplog(params);

    return next();
}

exports.register = function()
{
    relays = exports.getRelays(cfgrelays);
    routes = exports.getRoutes(cfgrouting);
    rtable = new RoutingTable(relays, routes);

    // this.register_hook('delivered', 'hook_delivered');
};


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
