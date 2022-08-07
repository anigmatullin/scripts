import {spawn} from 'node:child_process';
import { argv } from 'node:process';

if (argv.length < 3) {
    console.error("specify command and its arguments");
    process.exit(1);
}

const cmd = argv[2];
const args = argv.slice(3);

// console.log(cmd);
// console.log(args);

const child = spawn(cmd, args);

child.on('exit', code => {
    // console.log(code);
});

child.stdout.on('data', data => {
    //log to API or DB
    //some escape symbols are lost
    //either because of toString
    //or because of console.log
    
    //tshoot: print buffer
    //find esc-sequences
    //print toString to file --> compare
    
    // console.log(data.toString('utf8'));

    process.stdout.write(data);
});
