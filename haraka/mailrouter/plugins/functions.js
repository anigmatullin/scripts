
exports.httplog = function (obj, url)
{
    // let jsondata = JSON.stringify(obj);
    let jsondata = JSON.stringify(obj, censor(obj));

    let req = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: jsondata
    };

    return fetch(url, req);
}


exports.getAddr = function (addr)
{
    let res = addr.user + "@" + addr.host;
    return res;
}

exports.getAddrList = function(arr)
{
    let res = ""
    arr.forEach(addr =>{
        if (!res) {
            res += exports.getAddr(addr);
        }
        else {
            res += "," + exports.getAddr(addr);
        }
    });

    return res;
}

exports.log = function (msg)
{
    fs.appendFile(logfile, msg + "\n", err => {
        if (err) {
        }
        //file written successfully
    });    
}

function censor(censor) {
    var i = 0;
    
    return function(key, value) {
      if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value) 
        return '[Circular]'; 
      
      if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
        return '[Unknown]';
      
      ++i; // so we know we aren't using the original object anymore
      
      return value;  
    }
}


function jsonlog(obj)
{
    let str = JSON.stringify(obj, censor(obj));
    log(str);
    return str;
}


function getDomain(addr)
{
    let domain = addr.substring(addr.lastIndexOf('@') + 1);
    return domain;
}


/////////////////////////////
