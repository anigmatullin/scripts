const models = require('../models');

let rcptsSaved = [];

let rcpts = [
    {
        name: "rcpt1",
        email: "rcpt1@ngm.dev"
    },
    {
        name: "rcpt2",
        email: "rcpt2@ngm.dev"
    },
    {
        name: "rcpt3",
        email: "rcpt3@ngm.dev"
    }
];

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
};

function initModelLinks(models)
{
    models.MailAddr.belongsToMany(models.Transaction, { through: 'linkAddrTransaction' });
    models.Transaction.belongsToMany(models.MailAddr, { through: 'linkAddrTransaction' });
}

function insertRcpts(rcpts)
{
    let promises = [];

    rcpts.forEach(rcpt => {
        let tmp = models.MailAddr
            .upsert(rcpt)
            .then(data => {
                let tmp = JSON.parse(JSON.stringify(data));
                let id = tmp[0].id;
                rcptsSaved.push(id);
            });

        promises.push(tmp);
    });

    return promises;
}

// create/upsert multiple Rcpts
// create a new Transaction and link them to all Rcpts
// query Rcpts by Transaction
// query Transactions by Rcpts


initModelLinks(models);
let promises = insertRcpts(rcpts);

Promise.all(promises)
    .then(() => console.log(rcptsSaved))
    .then(() => models.sequelize.close())
    .then(() => rcptsSaved.forEach(rcpt => console.log( rcpt )))

// models.Transaction.create(req.body).then();


/*
notes:
-need to get array of IDs
-create transaction with array of addr IDs
*/
