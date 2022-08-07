import raw from 'raw-socket';

export function createHeader(data) //remove
{
    const datastr = String(data);
    const header = Buffer.alloc(8 + datastr.length);

    header.fill(0, 8);  //fill zeros for all header
    header.writeUInt8(8, 0); //type = 8 for icmp echo
    header.writeUInt8(0, 1);  //code = 0 for both icmp echo and reply

    header.writeUInt16BE(0, 2); //the place for the checksum. filling zeros as of now...
    
    header.writeUInt16LE(process.pid % 65535, 4); //ICMP ID
    // header.writeUInt16LE(0, 4); //debug only

    header.writeUInt16BE(1, 6); // sequence number. that should come from params

    header.write(datastr, 8);

    const [checksum, ignore] = createCheckSum(header);

    // const checksum = raw.createChecksum(header);

    const finalPacket = raw.writeChecksum(header, 2, checksum);
    // console.log(header);
    // console.log(`checksum1: `, checksum.toString(16));
    // console.log(`checksum2: `, checksum2.toString(16));
    // console.log(`\n\n\n`);
    return finalPacket;
}


export async function sendPing(socket, dest) //remove
{
    return new Promise((resolve, reject) => {

        socket.on('message', (buffer, source) => {
            
            // socket.close();
            
            resolve([buffer, source]);
        });
        
        
        const buffer = createHeader("AA");
        
        socket.send(buffer, 0, buffer.length, dest, (err, bytes) => {
            if (err) {
                reject(err);
            }
        
        });

    })

}


export function add16(n1, n2)
{
    const MOD = 1 << 16;
    let res = n1 + n2;

    if (res < MOD) {
        return res;
    }

    else {
        return (res+1) % MOD;
    }
}


export function bufferFromHexStrArray(bytes)
{
    const arr = new Uint8Array(bytes.length);

    bytes.map((item, index) => {
        const val = parseInt(item, 16);
        arr[index] = val;
    })
    
    return Buffer.from(arr.buffer);
}

export function dec2bin(dec)
{
    return (dec >>> 0).toString(2);
}

export function printBin(val)
{
    let tmp = dec2bin(val);
    const p = tmp.padStart(16, '0');
    console.log(p);
}

export function printHex(msg, val)
{
    const tmp = val.toString(16).padStart(4, '0');
    console.log(`${msg} 0x${tmp}`);
}


export function createCheckSum(buffer)
{
    const buf = Buffer.alloc(buffer.length);
    buffer.copy(buf);

    // console.log(buffer.buffer);
    // console.log(buf.buffer);

    buf.swap16(); //change from BE to LE
    
    let arr16 = new Int16Array(buf.buffer, 0, buf.length/2);
    
    const res = arr16.reduce((total, current) => {
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
    
    //invert
    //because bitwise operators convert operands to int32
    //we would get rubbish in first 2 bytes -- leading 111...
    //we need to zero the first 2 bytes
    const checksum = ~res & 0x0000ffff;
    
    return [checksum, res];
}


export function validateCheckSum(buf)
{
    const buffer = Buffer.alloc(buf.length);
    buf.copy(buffer);

    // console.log(buffer);
    buffer.swap16()   // change endianness
    let arr = new Int16Array(buffer.buffer, 20, buffer.length/2 - 10);

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


export function intToIP(int)
{
    const octet4 = int & 255;
    const octet3 = ((int >> 8) & 255);
    const octet2 = ((int >> 16) & 255);
    const octet1 = ((int >> 24) & 255);

    return octet1 + "." + octet2 + "." + octet3 + "." + octet4;
}


export function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve('sleptwell'), ms));
}
