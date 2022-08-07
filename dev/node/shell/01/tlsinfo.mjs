import tls from 'node:tls';
import { argv } from 'node:process';

console.log(argv);

if (argv.length < 3) {
    console.log("hostname required");
    process.exit(1);
}

const host = argv[2];
const port = 443;


// openssl s_client -connect google.com:443
// node -p crypto.constants.defaultCoreCipherList | tr ':' '\n'

// console.log(tls);

// const fs = require('fs');

const options = {
    // ca: fs.readFileSync('ca-crt.pem'),
    // key: fs.readFileSync('client1-key.pem'),
    // cert: fs.readFileSync('client1-crt.pem'),
    host: host,
    port: port,
    servername: host,
    rejectUnauthorized:true,
    requestCert:true,
};

const socket = tls.connect(options, () => {
    console.log('client connected', socket.authorized ? 'authorized' : 'unauthorized');
    process.stdin.pipe(socket);
    process.stdin.resume();
});

socket.once('secureConnect', () => {
    // console.log(socket);
    const cert = socket.getPeerCertificate();
    console.log("===========Cert below============================================================");
    console.log(cert);
    process.exit(0);
});

socket.setEncoding('utf8');

socket.on('data', (data) => {
    console.log(data);
});

socket.on('error', (error) => {
    console.log(error);
});

socket.on('end', (data) => {
    console.log('Socket end event');
});
