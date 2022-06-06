const  fs = require('fs');
const simpleParser = require('mailparser').simpleParser;

module.exports = class AttachChecker
{
    url = "";

    constructor(url)
    {
        this.url = url;
    }

    async checkHashList(list)
    {
        let url = this.url;
        let jsondata = JSON.stringify(list);

        let req = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: jsondata
        };

        let action = "allow";

        let prom = fetch(url, req)
            .then(res => res.json())
            .then(res => action = res?.action)
            .catch(err => action = "allow")
        
        await prom;

        return action;
    }


    async  getAttachments(inp)
    {
        let options = {};
        let res = [];
        let parsed = await simpleParser(inp, options);

        // return parsed;

        parsed.attachments.forEach(item => {
            
            let tmp = {
                contentType: item.contentType,
                filename: item.filename,
                size: item.size,
                md5: item.checksum
            };

            res.push(tmp);
        })

        return res;
    }


    async check(inp)
    {
        let result = null;
        
        await this.getAttachments(inp)
            .then(attachments => this.checkHashList(attachments, this.url))
            .then(res => result = res)
            .catch(err => result = "allow");
        
        return result;
    }

}
