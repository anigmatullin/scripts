import {pipe} from 'lodash/fp';

let str = "  Salam Aleikum  ";

// str = str.trim();
// str = `<div>${str}</div>`;
// str = str.toLowerCase();
// console.log(str);

// log(wrap(tolower(trim(str))));

// document.appendChild(str);
// var elem = document. createElement('div');
// document.body.appendChild(elem);
// elem.innerHTML = str;


function wrap(tag)
{
    return  (str) => `<${tag}>${str}</${tag}>`;
}

const trim = (str) => str.trim();
const tolower = (str) => str.toLowerCase();
const log = (str) => console.log(str);


const transform = pipe(trim, tolower, wrap("span"), log);

transform(str);
