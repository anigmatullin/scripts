import * as fs from 'fs/promises';
import * as fsm from 'fs';
import { createReadStream, createWriteStream } from 'fs';

import * as mailparser from 'mailparser';

type PromiseFactory = (data: any) => Promise<any>;

function readStream(stream: fsm.ReadStream) {

    return new Promise((resolve, reject) => {
        let data:String = "";
        
        stream.on("data", chunk => data += chunk.toString());
        stream.on("end", () => resolve(data));
        stream.on("error", error => reject(error));
    });
}

function writeStream(stream: fsm.WriteStream, data: any) {

    return new Promise((resolve, reject) => {

        let converted = data.toString();
        
        stream.on("error", error => reject(error));

        stream.write(converted, () => {
            stream.end();
            resolve(converted);
        });
    });
}

function demoPromise(buff: any) {

    let p = new Promise((resolve, reject) => {

        let data = buff.toString();
        let obj = {
            len: data.length,
            raw: data
        };
        console.log(obj);
        resolve(obj);

    });

    return p;
}

async function pipePromise(r: fsm.ReadStream, w:fsm.WriteStream, filter: PromiseFactory) {
    let data = await readStream(r);

    let promise = filter(data);
    promise.then((data) => writeStream(w, data) );
    return promise;

    // let pr = readStream(r).then((data) => writeStream(w, data) );
    // return pr;
}

async function process(r: fsm.ReadStream, w:fsm.WriteStream) {

    let promise = readStream(r)
    .then( data => {
        let obj = {
            len: String(data).length,
            raw: data
        };
        console.log(obj);
        return obj;
    })
    .then( data => JSON.stringify(data, null, 2))
    .then( data => JSON.parse(data))
    .then( data => data.raw)
    .then( data => writeStream(w, data) );
    return promise;
}


async function processEmail(r: fsm.ReadStream, w:fsm.WriteStream) {

    let buff = await readStream(r);
    let eml = String(buff);
    let options = {};

    let promise = mailparser.simpleParser(eml, options)
    .then(parsed => {
        console.log(parsed);
        let ret = {
            eml: eml,
            parsed: parsed,
            size: eml.length
        };
        return ret;
    })
    // .then( data => JSON.stringify(data, null, 2))
    .then( data => data.eml)
    .then( data => writeStream(w, data) );

    return promise;
}

function pipeStream(r: fsm.ReadStream, w:fsm.WriteStream) {

    return new Promise((resolve, reject) => {

        readStream(r)
            .then( data => writeStream(w, data) )
            .then( data => resolve(data))
            .catch( error => reject(error));
    });
}

let r = createReadStream('test.eml');
let w = createWriteStream('filtered.eml');

let p = processEmail(r, w)
.then(data => console.log(data))
.catch( err => console.log(err))
