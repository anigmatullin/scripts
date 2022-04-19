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
    let converted = data.toString();
    stream.on("error", (error) => reject(error));
    stream.write(converted, () => {
      stream.end();
      resolve(converted);
    });
  });
}
async function process(r2, w2) {
  let promise = readStream(r2).then((data) => {
    let obj = {
      len: String(data).length,
      raw: data
    };
    console.log(obj);
    return obj;
  }).then((data) => JSON.stringify(data, null, 2)).then((data) => JSON.parse(data)).then((data) => data.raw).then((data) => writeStream(w2, data));
  return promise;
}
var r = (0, import_fs.createReadStream)("test.eml");
var w = (0, import_fs.createWriteStream)("filtered.eml");
var p = process(r, w).then((data) => console.log(data)).catch((err) => console.log(err));
