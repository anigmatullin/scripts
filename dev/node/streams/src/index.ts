import * as fs from 'fs/promises';
import * as fsm from 'fs';
import { createReadStream, createWriteStream } from 'fs';


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
        
        stream.on("error", error => reject(error));

        stream.write(data, () => {
            stream.end();
            resolve(data);
        });
    });
}

function pipePromise(r: fsm.ReadStream, w:fsm.WriteStream) {
    let p = readStream(r).then((data) => writeStream(w, data) );
    return p;
}

function pipeStream(r: fsm.ReadStream, w:fsm.WriteStream) {

    return new Promise((resolve, reject) => {

        readStream(r)
            .then( data => writeStream(w, data) )
            .then( data => resolve(data))
            .catch( error => reject(error));
    });
}

let r = createReadStream('test.txt');
let w = createWriteStream('new.txt');

let p = pipePromise(r, w)
.then(data => console.log(data))
.catch( err => console.log(err))
