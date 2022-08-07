import { Buffer } from 'node:buffer';
import { argv } from 'node:process';
import { add16, bufferFromHexStrArray, printBin, printHex, createCheckSum } from './utils.mjs';

const bytes = argv.slice(2);
console.log('original checksum:', bytes[2], bytes[3]);
bytes[2] = '0x0'; //zero the checksum field
bytes[3] = '0x0'; //zero the checksum field

const buf = bufferFromHexStrArray(bytes);
const [val, res] = createCheckSum(buf);

printHex('sum:', res);
printHex('~sum:', val);

printBin(res);
printBin(val);

printHex('checksum:', val);
