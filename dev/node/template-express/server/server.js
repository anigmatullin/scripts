#!/usr/bin/env node

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const http = require('http');
const debug = require('debug')('demo-app:server');
const app = require('./app');

dotenv.config();

let server = null;
let port = 0;

async function dbConnect()
{
    let con;
    console.log("");
    console.log("");
    console.log("MongoDB: Trying to connect");
    // console.log(process.env.MONGO);

    try {
        //connect
        con = await mongoose.connect(process.env.MONGO);
    }
    catch (err) {
        console.error("MongoDB: Connection failed");
        process.exit(0);
    }

    console.log("MongoDB: Connection successful!");
    console.log("");
    console.log("");
}


async function makeServer(app)
{
    const addr = process.env.ADDR || '0.0.0.0';
    port = setPort(app, process.env.PORT, 7000);

    try {
        server = http.createServer(app);
        server.listen(port, addr);
        server.on('error', onError);
        server.on('listening', onListen);
    
        server.on('connection', (socket) => console.log(`Connection from: ${socket.remoteAddress}:${socket.remotePort}`));
        server.on('request', (req) => console.log(`${req.method} ${req.url}`));
    
        process.on('SIGTERM', onSigTerm);
        process.on('SIGINT', onSigInt);
    }
    catch (err) {
        //
        console.log(err);
    }

}

async function onSigTerm(signal)
{
    await mongoose.disconnect();
    console.log(`\n\n\tProcess ${process.pid} received a SIGTERM signal\n\n`);
    process.exit(0);   
}

async function onSigInt(signal)
{
    await mongoose.disconnect();
    console.log(`\n\n\tProcess ${process.pid} has been interrupted\n\n`);
    process.exit(0);
}


function setPort(app, val, defport = 7000)
{
    let result;
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        result = defport;
    }
    else if (port > 0 && port < 65535) {
        result = port;
    }
    else {
        result = defport;
    }

    app.set('port', result);
    process.env.PORT = result;

    return result;
}



function onError(error)
{
    console.error(error);

    if (error.syscall !== 'listen') {
        throw error;
    }

    switch (error.code) {
        case 'EACCES':
            console.error(`Port ${process.env.PORT} requires elevated privileges`);
            process.exit(1);

        case 'EADDRINUSE':
            console.error(`Port ${process.env.PORT} is already in use`);
            process.exit(2);

        default:
            throw error;
    }
}


function onListen()
{
    const addr = server.address();
    console.log('Listening on ');
    console.log(addr);
}


async function run()
{
    dotenv.config();
    await dbConnect();
    await makeServer(app);
}

//////////////////////////////////////////////

run();