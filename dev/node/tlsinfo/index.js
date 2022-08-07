import tls from 'node:tls';
import { argv } from 'node:process';
import Certificate from './Certificate.js';
console.log(argv);
if (argv.length < 3) {
    console.log("hostname required");
    process.exit(1);
}
const host = argv[2];
const port = 443;
const options = {
    host: host,
    port: port,
    servername: host,
    rejectUnauthorized: false,
    requestCert: true,
};
const socket = tls.connect(options, () => {
    console.log('client connected', socket.authorized ? 'authorized' : 'unauthorized');
});
socket.once('secureConnect', () => {
    // console.log(socket);
    const cert = socket.getPeerCertificate();
    const crt = new Certificate(cert);
    console.log("===========Cert below============================================================");
    console.log(cert);
    process.exit(0);
});
