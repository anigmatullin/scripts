import net from 'node:net';
import dns from 'node:dns';
import { argv } from 'node:process';
import whois from 'whois';
import geoip from 'geoip-lite';
import {intToIP, sleep} from './utils.mjs';
import ICMP from './packets/ICMP.mjs';
import Socket from './Socket.mjs';


if (argv.length < 4) {
    console.error("Usage: jsping <dest>");
    process.exit(1);
}

let dest = argv[2];
const count = +argv[3];
const timeout = 100;

const PingInfo = {
    dest,
    ip: "",
    ptr: "",
    timeout,
    countTimedOut: 0,
    countSuccess: 0,
    count,
    size: 64,
}

const latencyLog = [];

function lookup(host)
{
    const options = {
        family: 4,
        // hints: dns.ADDRCONFIG | dns.V4MAPPED,
    };

    return new Promise((resolve, reject) => {

        dns.lookup(host, options, (err, address, family) => {
            //
            if (err) {
                reject(err);
            }
            else {
                resolve([address, family]);
            }
        });
            
    });
}

function lookupPtr(ip)
{
    //check if IP

    function exec(resolve, reject)
    {
        dns.reverse(ip, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    }

    return new Promise(exec);
    
}

function lookupWhois(addr)
{
    //check if IP

    function exec(resolve, reject)
    {
        whois.lookup(addr, function(err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    }

    return new Promise(exec);
    
}

function getMinMaxAvg(arr)
{
    if (!arr.length) {
        return [0, 0, 0];
    }

    if (arr.length === 1) {
        const res = arr[0];
        return [res, res, res];
    }

    let max = arr[0];
    let min = arr[0];
    let sum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    const avg = sum / arr.length;
    return [min, max, avg];
}

async function printStat(PingInfo, latencyLog)
{
    console.log("--------------------------------");
    console.log("dest:", PingInfo.dest);
    console.log("ip:", PingInfo.ip);
    console.log("");

    if (PingInfo.ptr.length > 3) {
        console.log("This IP has at least", PingInfo.ptr.length, "PTR records");
        console.log("Showing first 3 PTR records:")
        console.log("\t", PingInfo.ptr[0]);
        console.log("\t", PingInfo.ptr[1]);
        console.log("\t", PingInfo.ptr[2]);
        console.log("\n");
    }
    else {
        console.log("ptr:", PingInfo.ptr);
        console.log("");
    }

    console.log("timeout:", PingInfo.timeout, 'ms');
    console.log("packet size:", PingInfo.size);
    console.log("packets total:", PingInfo.count);
    console.log("packets success:", PingInfo.countSuccess);
    console.log("packets timed out:", PingInfo.countTimedOut);
    console.log("");

    if (latencyLog.length) {
        const [min, max, avg] = getMinMaxAvg(latencyLog);
        let displayAvg = +avg.toFixed(2);
    
        console.log("latency min:", min, "ms");
        console.log("latency avg:", displayAvg, "ms");
        console.log("latency max:", max, "ms");
    }

    // const whoisdata = await lookupWhois('8.8.8.8');
    // console.log(whoisdata);

    // const geoipdata = geoip.lookup('8.8.8.8');
    // console.log(geoipdata);

    console.log("")
}


process.on('SIGINT', async function() {
    console.log("Interrupting...");
    await printStat(PingInfo, latencyLog);
    process.exit(2);
});

if (net.isIPv4(dest)) {
    PingInfo.ip = dest;
}
else {
    let address, family;

    try {
        [address, family] = await lookup(PingInfo.dest);
    }
    catch(err) {
        console.error("DNS Lookup Problem for: %j", dest);
        process.exit(1);
    }

    PingInfo.ip = address;
}

// try {

//     PingInfo.ptr = lookupPtr(PingInfo.ip);
// }
// catch (err) {
//     //do nothing
//     // console.log(err);
// }

lookupPtr(PingInfo.ip)
    .then(data => PingInfo.ptr = data)
    .catch(() => {});

console.log('\nhost: %j, address: %j\n', PingInfo.dest, PingInfo.ip);


const sock = new Socket();


for (let i = 0; i < count; i++) {
    const outpkt = ICMP.generate(i, 'AABBCCDDEEFF');

    const tmStart = new Date();
    let race = Promise.race([
        sock.send(outpkt, PingInfo.ip, i),
        sleep(timeout),
        ]);

    // const [buffer, source] = await sock.send(outpkt, dest);
    const result = await race;
    if (result === 'sleptwell') {
        PingInfo.countTimedOut++;
        console.log('timeout');
        continue;
    }

    PingInfo.countSuccess++;

    const tmEnd = new Date();
    const latency = tmEnd - tmStart;
    latencyLog.push(latency);
    // console.log(result);
    const [buffer, source] = result;
    

    const pkt = new ICMP(buffer);
    printPacket(pkt, buffer.length, latency);
    // console.log(`${intToIP(pkt.src)} > ${intToIP(pkt.dst)} ttl:${pkt.ttl} seq:${pkt.icmpSequenceNum} ${buffer.length}B ${tmEnd - tmStart}ms`);

    if (pkt.checksumIsValid()) {
        // console.log(`checksum valid!`);
    }
    else {
        console.log(`checksum is NOT valid!`);
    }

    // printPacketDetails(pkt);

    await sleep(200);
}

sock.cleanup();
printStat(PingInfo, latencyLog);

function printPacket(pkt, size, tm)
{
    // const msg = `${intToIP(pkt.src)} > ${intToIP(pkt.dst)} ttl:${pkt.ttl} seq:${pkt.icmpSequenceNum} ${size}B ${tm}ms ${pkt.icmpData}`;
    const msg = `${intToIP(pkt.src)} > ${intToIP(pkt.dst)} ttl:${pkt.ttl} seq:${pkt.icmpSequenceNum} ${size}B ${tm}ms`;
    console.log(msg);
}

function printPacketDetails(pkt)
{
    console.log(``);
    console.log(`ip version: ${pkt.version}`);
    console.log(`header length: ${pkt.hdrlen} bytes`);
    console.log(``);

    console.log(`dscp: ${pkt.dscp}`);
    console.log(`ecn: ${pkt.ecn}`);
    console.log(`total length: ${pkt.totalLength}`);
    console.log(`identification: ${pkt.identification}`);
    console.log(`ip flags: ${pkt.flags}`);
    console.log(`fragment offset: ${pkt.fragmentOffset}`);

    console.log(``);
    console.log(`TTL: ${pkt.ttl}`);
    console.log(`Proto: ${pkt.proto}`);
    console.log(`IP Checksum: ${pkt.hdrCheckSum}`);

    console.log(``);

    console.log(`src: ${intToIP(pkt.src)}`);
    console.log(`dst: ${intToIP(pkt.dst)}`);
    console.log(``);

    console.log(`ICMP Type: ${pkt.icmpType}`);
    console.log(`ICMP Code: ${pkt.icmpCode}`);

    console.log(`ICMP Check Sum: ${pkt.icmpCheckSum.toString(16)}`);
    console.log(`ICMP ID: ${pkt.icmpId}`);
    console.log(`ICMP Sequence Number: ${pkt.icmpSequenceNum}`);

    console.log(`Data: ${pkt.icmpData}`);
}
