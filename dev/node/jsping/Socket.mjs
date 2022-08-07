import raw from 'raw-socket';

export default class Socket
{
    constructor()
    {
        this.available = true;
        this.socket = raw.createSocket({protocol: raw.Protocol.ICMP});
    }

    cleanup()
    {
        this.socket.pauseRecv();
    }

    send(buffer, dest, sequenceNum)
    {
        // if (!this.available) {
        //     throw new Error("Socket is busy");
        // }

        this.available = false;

        return new Promise((resolve, reject) => {

            // console.log(this.socket.listenerCount('message'));
            // console.log(this.socket.listeners('message'));

            this.socket.removeAllListeners('message');

            this.socket.on('message', (buffer, source) => {

                const byte0 = buffer.readUInt8(0);
                const expectedIcmpID = process.pid % 65535;
                const icmpID = buffer.readUInt16BE(24);
                const actualSequenceNum = buffer.readUInt16BE(26);

                if (byte0 !== 69) {
                    return;
                }

                if (icmpID !== expectedIcmpID) {
                    return;
                }

                if (sequenceNum !== actualSequenceNum) {
                    return;
                }

                resolve([buffer, source]);
            });

            
            this.socket.send(buffer, 0, buffer.length, dest, (err, bytes) => {
                if (err) {
                    reject(err);
                }
            });
    
        })
    }
}
