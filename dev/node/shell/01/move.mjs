
const msg = 'Hello world';

const resetFG = '\u001b[39m';

const fgBlack = '\u001b[30m';
const fgRed = '\u001b[31m';
const fgGreen = '\u001b[32m';

const fgYellow = '\u001b[33m';
const fgBlue = '\u001b[34m';
const fgMagenta = '\u001b[35m';
const fgCyan = '\u001b[36m';
const fgWhite = '\u001b[37m';
const fgGray = '\u001b[90m';

const fgBrightRed = '\u001b[91m';
const fgBrightGreen = '\u001b[92m';
const fgBrightYellow = '\u001b[93m';
const fgBrightBlue = '\u001b[94m';
const fgBrightMagenta = '\u001b[95m';
const fgBrightCyan = '\u001b[96m';
const fgBrightWhite = '\u001b[97m';



const up = '\u001b[A';
const down = '\u001b[B';
const right = '\u001b[C';
const left = '\u001b[D';

function moveUp(n)
{
    return `\u001b[${n}A`;
}

function moveDown(n)
{
    return `\u001b[${n}B`;
}

function moveLeft(n)
{
    return `\u001b[${n}D`;
}

function moveRight(n)
{
    return `\u001b[${n}C`;
}

console.log(fgBrightGreen + moveUp(10) + moveRight(40) + msg + resetFG);
