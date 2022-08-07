import { terminalCodesToHtml } from "terminal-codes-to-html";

const str1  = "\x1b[0m \x1b[90m 5 |\x1b[39m \x1b[36mfunction\x1b[39m draw() {\x1b[0m";
const str2 = '\x1b[33mHI\x1b[0m';

const html1 = terminalCodesToHtml(str1);
const html2 = terminalCodesToHtml(str2);

console.log(str1);
console.log(html1);

console.log("--------------------")

console.log(str2);
console.log(html2);
