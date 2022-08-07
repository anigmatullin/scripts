#!/usr/bin/env node --no-warnings

import {pbar} from './pbar.mjs';
import fs from 'node:fs/promises';
import path from 'node:path';
import md5 from 'md5-file';
import { Magic } from 'mmmagic';

import {Table} from 'console-table-printer';

// const url = "https://reqres.in/api/users";
// const url = "https://ftp.nsc.ru/pub/centos-9/9-stream/BaseOS/x86_64/iso/CentOS-Stream-9-latest-x86_64-dvd1.iso";
// const url = "https://mirror.yandex.ru/fedora/linux/releases/36/Workstation/aarch64/iso/Fedora-Workstation-Live-aarch64-36-1.5.iso";
// const url = "https://mirror.yandex.ru/mirrors/MX-Linux/MX-ISOs/ANTIX/Final/antiX-21/antiX-21_x64-core.iso";

// const url = "https://mirror.yandex.ru/mirrors/MX-Linux/MX-ISOs/ANTIX/Final/antiX-21/antiX-21-net_x64-net.iso";

let url = "https://www.habucenter.ru/upload/iblock/76a/76a7f6a0d1fda54f72505775f5b9d864.pdf";

url = "https://elsu.ru/uploads/files/2020-10/1603388556_uchebnoe-posobie.-javascript.osnovy-programmirovaniya.pdf";
url = "https://www.tutorialspoint.com/javascript/javascript_tutorial.pdf";
url = "https://exploringjs.com/impatient-js/downloads/impatient-js-preview-book.pdf";

const response = await fetch(url);

console.log(response);

const stream = response.body;
const reader = stream.getReader();
const contentLength = +response.headers.get('Content-Length');

const hdrContentDisposition = response.headers.get('Content-Disposition');
let fpath = "";

if (hdrContentDisposition) {
    const disposition = contentDisposition.parse(hdrContentDisposition);
    fpath = disposition.parameters.filename;
}
else {
    fpath = path.basename(url);
}

console.log("");

let total = 0;

const file = await fs.open(fpath, 'w');
const fh = file.createWriteStream();


while(true) {
    // value - Uint8Array из байтов каждого фрагмента
    const res = await reader.read();
    
    if (res.done) {
        if (res.value) {
            handleData(res.value);
        }
        break;
    }

    handleData(res.value);
}

const p = new Table();
for (const [hdr, value] of response.headers.entries()) {
    p.addRow({
        Header: hdr,
        Value: value,
    })
}
p.printTable();

await file.close();
const hash = await md5(fpath);
const size = Math.floor(contentLength / (1024 * 1024));

console.log("filename:", fpath);
console.log(`size: ${size}MB`);
console.log("md5:", hash);

const magic = new Magic();
magic.detectFile(fpath, (err, res) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(res);
    }
});


function handleData(data)
{
    total += data.length;
    fh.write(data);
    pbar(total, contentLength);   
}
