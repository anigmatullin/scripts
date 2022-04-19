// src/index.ts
var import_fs = require("fs");
function readStream(stream) {
  return new Promise((resolve, reject) => {
    let data = "";
    stream.on("data", (chunk) => data += chunk.toString());
    stream.on("end", () => resolve(data));
    stream.on("error", (error) => reject(error));
  });
}
function writeStream(stream, data) {
  return new Promise((resolve, reject) => {
    stream.on("error", (error) => reject(error));
    stream.write(data, () => {
      stream.end();
      resolve(data);
    });
  });
}
function pipePromise(r2, w2) {
  let p2 = readStream(r2).then((data) => writeStream(w2, data));
  return p2;
}
var r = (0, import_fs.createReadStream)("test.txt");
var w = (0, import_fs.createWriteStream)("new.txt");
var p = pipePromise(r, w).then((data) => console.log(data)).catch((err) => console.log(err));
