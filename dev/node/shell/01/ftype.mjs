import {fileTypeFromFile} from 'file-type';

import { Magic } from 'mmmagic';

const path = "/bin/bash";
// const path = "color.mjs";
const ftype = await fileTypeFromFile(path);

console.log(ftype);

console.log(await fileTypeFromFile("antiX-21-net_x64-net.iso"));

const magic = new Magic();
magic.detectFile(path, (err, res) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(res);
    }
});
