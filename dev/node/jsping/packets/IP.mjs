
export default class IP
{
    constructor(buffer)
    {
        // console.log(buffer);s
        const bodylen = buffer.length - 20;

        this.ipbody = Buffer.alloc(bodylen);

        if (!this.ipbody) {
            throw new Error(`Could not allocate buffer for IP Body ${bodylen}`);
        }

        buffer.copy(this.ipbody, 0, 20);

        const byte0 = buffer.readUInt8(0);
        const byte1 = buffer.readUInt8(1);
        const bytes2_3 = buffer.readUInt16BE(2);
        
        this.identification = buffer.readUInt16BE(4);
        const bytes6_7 = buffer.readUInt16BE(6);
        
        this.ttl = buffer.readUInt8(8);
        this.proto = buffer.readUInt8(9);
        this.hdrCheckSum = buffer.readUInt16BE(10);
    
        this.src = buffer.readUInt32BE(12);
        this.dst = buffer.readUInt32BE(16);

        this.version = byte0 >>> 4;
        this.hdrlen = (byte0 & 0b1111) * 4;
        this.dscp = byte1 >>> 2;
        this.ecn = byte1 & 0b11;
        this.totalLength = bytes2_3;
    
        this.flags = bytes6_7 >>> 13;
        this.fragmentOffset = bytes6_7 & 0b0001111111111111;
    }
}
