'use strict';


const fs   = require('fs');
const path = require('path');
const AttachChecker = require("../plugins/AttachChecker");



exports.register = function ()
{
    const plugin = this;
}


exports.get_tmp_file = function (transaction)
{
    const plugin = this;
    const tmpdir  = plugin?.cfg?.main?.tmpdir || '/tmp';
    return path.join(tmpdir, `${transaction.uuid}.tmp`);
}

exports.hook_data_post = async function (next, connection)
{
    const plugin = this;

    if (!connection?.transaction) {
        return next();
    }

    // const tmpfile = plugin.get_tmp_file(connection.transaction);
    // const ws      = fs.createWriteStream(tmpfile);

    // ws.once('error', err => {
    //     connection.results.add(plugin, {
    //         err: `Error writing temporary file: ${err.message}`
    //     });
    //     if (!plugin.cfg.defer.error) return next();
    //     return next(DENYSOFT, 'Attach Scan Error');
    // });

    // ws.once('close', () => {

    //     function do_next (code, msg) {
    //         fs.unlink(tmpfile, () => {});
    //         return next(code, msg);
    //     }

    //     new EmlParser(fs.createReadStream(tmpfile))
    //         .parseEml()
    //         .then(result  => {
    //             // properties in result object:
    //             // {
    //             //	"attachments": [],
    //             //	"headers": {},
    //             //	"headerLines": [],
    //             //	"html": "",
    //             //	"text": "",
    //             //	"textAsHtml": "",
    //             //	"subject": "",
    //             //	"references": "",
    //             //	"date": "",
    //             //	"to": {},
    //             //	"from": {},
    //             //	"cc": {},
    //             //	"messageId": "",
    //             //	"inReplyTo": ""
    //             // }
    //             console.log(result);
    //         })
    //         .catch(err  => {
    //             console.log(err);
    //         });
        
    //     return next();

    // });

    // connection.transaction.message_stream.pipe(ws, { line_endings: '\r\n' });

    const url = "http://localhost:3000/filter/md5"
    const checker = new AttachChecker(url);
    
    let result = null;

    await checker.check(connection.transaction.message_stream).then(res => result = res);

    if (result == "allow") {
        return next();
    }
    else {
        return next(DENYSOFT, 'Blocked: Attach Scan');
    }
}
