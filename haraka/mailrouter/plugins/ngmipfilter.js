const fs = require('fs');

const logfile = '/tmp/haraka/haraka-conn.log';


/*

this:

{
    "name": "ngmipfilter",
    "base": {},
    "timeout": 30,
    "hasPackageJson": false,
    "plugin_path": "/path/to/mailrouter/plugins/ngmipfilter.js",
    "config": {
        "root_path": "/usr/local/lib/node_modules/Haraka/config",
        "overrides_path": "/path/to/mailrouter/config"
    },
    "hooks": {
        "connect": [
            "hook_connect"
        ]
    }
}


https://haraka.github.io/core/Connection/

connection.remote:

{
    "ip":"127.0.0.1",
    "port":54279,
    "host":"Unknown",
    "info":"Unknown",
    "closed":false,
    "is_private":true,
    "is_local":true
}

connection.local:

{
    "ip":"127.0.0.1",
    "port":25,
    "host":"devbook.local",
    "info":"Haraka/2.8.28"
}

connection.transaction: would not be available till MAIL FROM

cfg: that is whatever json you put in config/ngmipfilter

{
    "accesskeyid": "access key id",
    "allowed": ["127.0.0.1", "10.0.0.10"]
}


*/

exports.hook_connect = function (next, connection) {

    const cfg = this.config.get('ngmipfilter.json', 'json');

    // let data = JSON.stringify(cfg.allowed) + "\n\n\n";
    // log(data);

    let allowed = cfg.allowed.includes(connection.remote.ip);

    if (allowed) {
        connection.relaying = true;
        let msg = `allow: ${connection.remote.ip} con: ${connection.uuid}\n`;
        log(msg);
        return next(OK);
    }
    else {
        let msg = `deny: ${connection.remote.ip}  con: ${connection.uuid}\n`;
        log(msg);
        return next(DENYDISCONNECT);
    }
}


exports.register = function() {

    log("regsitering hooks for ip filter\n");
    this.lognotice("regsitering hooks\n");
    // this.register_hook('delivered', 'hook_delivered');
};


function log(msg)
{
    fs.appendFile(logfile, msg, err => {
        if (err) {
        }
        //file written successfully
    });    
}
