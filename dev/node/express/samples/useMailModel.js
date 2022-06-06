const Mail = require('../rmodels/Mail.js');

let txn = {
    dt: '2022-01-01 01:00:00',
    uuid: 'test',
    encoding: 'test',
    sender: 'test',
    rcpt_list: 'test',
    rcpt_count_accept: 0,
    rcpt_count_tempfail: 0,
    rcpt_count_reject: 0,
    delay_data_post: 0,
    data_bytes: 0,
    mime_part_count: 0,

    rcpt_to: [
        {
          original: '<rcpt6@ngm.dev>',
          original_host: 'ngm.dev',
          host: 'ngm.dev',
          user: 'rcpt8'
        },
        {
          original: '<rcpt7@ngm.dev>',
          original_host: 'ngm.dev',
          host: 'ngm.dev',
          user: 'rcpt9'
        }
    ],

    headers: {
        received: [
          'from devbook.local (Unknown [127.0.0.1])\tby devbook.local (Haraka/2.8.28) with ESMTP id 81C00D8A-1A45-4A52-BF88-79E1BD7749C6.1\tenvelope-from <sender@ngm.dev>;\tFri, 20 May 2022 23:39:09 +0500'
        ],
        date: [ 'Fri, 20 May 2022 23:39:09 +0500' ],
        to: [ 'rcpt@ngm.dev,rcpt6@ngm.dev,rcpt7@ngm.dev' ],
        from: [ 'sender@ngm.dev' ],
        subject: [ 'test Fri, 20 May 2022 23:39:09 +0500' ],
        'message-id': [ '<20220520233909.032437@devbook.local>' ],
        'x-mailer': [ 'swaks v20201014.0 jetmore.org/john/code/swaks/' ]
      }
};


let m = new Mail(txn);
// m.saveHeaders();
m.save();
// m.saveAndClose();


/*
- don't print SQL! production mode?
- test on webapp
*/
