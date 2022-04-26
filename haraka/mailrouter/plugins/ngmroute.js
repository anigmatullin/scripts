
const fs = require('fs');

const logfile = '/tmp/haraka/haraka.log';

/*

hmail.todo:

{
  "queue_time": 1650968046031,
  "domain": "localhost",
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
  },
  "notes": {
    "skip_plugins": [],
    "authentication_results": []
  },
  "uuid": "FD17BAC6-3692-41C8-B01A-2ED069D3CCD3.1.1"
}


*/

let internalDomains = [
    'ngm.dev',
    'localdomain'
];

let relay_internal = {
    // auth_user: '',
    // auth_pass: '',
    priority: 0,
    exchange: '127.0.0.1',
    port: 2527,
};

let relay_default = {
    // auth_user: '',
    // auth_pass: '',
    priority: 0,
    exchange: '127.0.0.1',
    port: 2526,
};

exports.hook_get_mx = function (next, hmail, domain) {

    let relay;
    let dt = new Date().toISOString();
    let msg = "";

    //if domain is in internal -- return relay_internal
    //otherwise -- return relay_default

    if (internalDomains.includes(domain)) {
        relay = [relay_internal];
        msg = `${dt} ${domain}: internal\n`;
    }
    else {
        relay = [relay_default];
        msg = `${dt} ${domain}: external\n`;
    }

    log(msg);

    return next(OK, relay);
}


exports.hook_delivered = function (next, hmail, params) {

    log("some delivered\n");
    this.lognotice("some delivered\n");
    return next();
}

exports.register = function() {

    log("regsitering hooks\n");
    this.lognotice("regsitering hooks\n");
    this.register_hook('delivered', 'hook_delivered');
};


function log(msg)
{
    fs.appendFile(logfile, msg, err => {
        if (err) {
        }
        //file written successfully
    });    
}
