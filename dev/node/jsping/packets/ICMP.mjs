import IP from './IP.mjs';
import { add16, createCheckSum } from '../utils.mjs';

export default class ICMP extends IP
{
    constructor(buffer)
    {
        super(buffer);
        // console.log(this.ipbody);

        this.icmpType = this.ipbody.readUInt8(0);
        this.icmpCode = this.ipbody.readUInt8(1);
        this.icmpCheckSum = this.ipbody.readUInt16BE(2);
    
        this.icmpId = this.ipbody.readUInt16BE(4);
        this.icmpSequenceNum = this.ipbody.readUInt16BE(6);
    
        this.icmpData = this.ipbody.toString('utf8', 8);
    }

    checksumIsValid()
    {
        //validate the check sum

        const buffer = Buffer.alloc(this.ipbody.length);
        this.ipbody.copy(buffer);
    
        // console.log(buffer);
        buffer.swap16()   // change endianness
        let arr = new Int16Array(buffer.buffer, 0, buffer.length/2);
    
        const res = arr.reduce((total, current) => {
            if (current < 0) {
                //change from  1's complement
                //which is used in the packet
                //to 2's complement which is used for calculations in JS
                //that has to be done
                //only for negative numbers
                current++;
            }
            // return total + current;
            return add16(total, current);
        });
        
            //Although, we converted signed values to two's complement
            //and performed summing by using two's complement
            //the bitwise end result should be considered as one's complement value
        
            //actual one's complement zero can be represented as either
            // 16 bit zeros:   0000 0000 0000 0000 (zero in one's complement 16 bit)
            // or 16 bit ones: 1111 1111 1111 1111 (zero in one's complement 16 bit, 65535 in any 32bit, 65535 in unsigned int 16 bit)
            // 16 bit ones would be equal to == 65535 in 32 bit world...
            //JS would actually calculate by converting operands to 32bit values.
            //we just need to check that binary indeed would be zero in terms of one's complement representation!
        
            //see -0 (minus zero)
            //in the article below:
            //https://en.wikipedia.org/wiki/Ones%27_complement
        
        if (res == 65535 || res == 0) {
            return true;
        }
        else {
            return false;
        }
    
    }

    static generate(seq, data)
    {
        const datastr = String(data);
        const header = Buffer.alloc(8 + datastr.length);
    
        header.fill(0, 8);  //fill zeros for all header
        header.writeUInt8(8, 0); //type = 8 for icmp echo
        header.writeUInt8(0, 1);  //code = 0 for both icmp echo and reply
    
        header.writeUInt16BE(0, 2); //the place for the checksum. filling zeros as of now...
        
        header.writeUInt16BE(process.pid % 65535, 4); //ICMP ID
        // header.writeUInt16LE(0, 4); //debug only
    
        header.writeUInt16BE(seq, 6); // sequence number. that should come from params
    
        header.write(datastr, 8);
    
        const [checksum, ignore] = createCheckSum(header);

        header.writeUInt16BE(checksum, 2);
    
        // const finalPacket = raw.writeChecksum(header, 2, checksum);

        return header;
    }
}
