export default class Certificate
{
    constructor(cert: any)
    {
        //
        console.log(cert.subject);
        console.log(cert.issuer);
        console.log(cert.subjectaltname);
        console.log(cert.infoAccess);
        
    }

    print()
    {
        //
    }
}

/*

const t = {
    subject: [Object: null prototype] {
      C: 'US',
      ST: 'California',
      L: 'Los Gatos',
      O: 'Netflix, Inc.',
      CN: 'www.netflix.com'
    },
    issuer: [Object: null prototype] {
      C: 'US',
      O: 'DigiCert Inc',
      CN: 'DigiCert TLS RSA SHA256 2020 CA1'
    },
    subjectaltname: 'DNS:account.netflix.com, DNS:ca.netflix.com, DNS:netflix.ca, DNS:netflix.com, DNS:signup.netflix.com, DNS:www.netflix.ca, DNS:www1.netflix.com, DNS:www2.netflix.com, DNS:www3.netflix.com, DNS:develop-stage.netflix.com, DNS:release-stage.netflix.com, DNS:www.netflix.com, DNS:tv.netflix.com, DNS:embed.develop-stage.netflix.com, DNS:embed.release-stage.netflix.com',
    infoAccess: [Object: null prototype] {
      'OCSP - URI': [ 'http://ocsp.digicert.com' ],
      'CA Issuers - URI': [ 'http://cacerts.digicert.com/DigiCertTLSRSASHA2562020CA1.crt' ]
    },
    bits: number,
    exponent: string,
    valid_from: string,
    valid_to: string,
    fingerprint: string,
    fingerprint256: string,
    fingerprint512: string,
    ext_key_usage: Array<string>,
    serialNumber: string,
}



*/
