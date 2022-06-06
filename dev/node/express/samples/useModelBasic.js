
const models = require('../models');

let data = {
    dt: "2022-01-01",
    uuid: "test",
    encoding: "test",
    hello_name: "test",
    remoteAddr: "test",
    remotePort: 0,
    remote_host: "test",
    remote_info: "test",
    remote_is_local: 0,
    remote_is_private: 0,
    using_tls: 0,
    tran_count: 0,
    rcpt_count_accept: 0,
    rcpt_count_tempfail: 0,
    rcpt_count_reject: 0,
};


models.Connection.create(data)
    .then(con => console.log(con));
