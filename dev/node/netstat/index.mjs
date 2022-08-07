
import netstat from 'node-netstat';

const filter = {
    protocol: 'tcp6',
}


netstat({filter}, (data) => {
    console.log(data);
});



