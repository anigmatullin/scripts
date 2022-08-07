import dns from 'node:dns';

function lookupPtr(ip)
{
    //check if IP

    function exec(resolve, reject)
    {
        dns.reverse(ip, (err, result) => {
        // dns.resolvePtr(ip, (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    }

    return new Promise(exec);
    
}


const ip = "172.217.21.174";
// const ip = "google.com";

const res = await lookupPtr(ip);

console.log(res.toString());
