import ping from 'net-ping';


console.log(ping);

const options = {
    networkProtocol: ping.NetworkProtocol.IPv4,
    packetSize: 1024,
    retries: 1,
    sessionId: (process.pid % 65535),
    timeout: 500,
    ttl: 32,
};

const session = ping.createSession();
const target = '8.8.8.8';

session.pingHost (target, function (error, target, sent, rcvd) {
    if (error)
        console.log (target + ": " + error.toString ());
    else {
        console.log(target + ": Alive");
        console.log(rcvd - sent);
        console.log(session.getSocket());
    }
});

