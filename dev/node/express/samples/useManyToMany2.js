const models = require('../models');

let rcptsSaved = [];

let rcpts = [
    {
        name: "rcpt1",
        email: "rcpt1@ngm.dev"
    },
    {
        name: "rcpt4",
        email: "rcpt4@ngm.dev"
    },
    {
        name: "rcpt5",
        email: "rcpt5@ngm.dev"
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



// create/upsert multiple Rcpts
// create a new Transaction and link them to all Rcpts
// query Rcpts by Transaction
// query Transactions by Rcpts

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

async function createStuff(txn, rcpts)
{
    let links = [];

    let promises = insertRcpts(rcpts);
    await Promise.all(promises);

    let txnSaved = await models.Transaction.create(txn);

    rcptsSaved.forEach(addr => {
        let tmp = {
            MailAddrId: addr,
            TransactionId: txnSaved.id
        }
        links.push(tmp);
    })

    await models.linkAddrTransaction.bulkCreate(links);

    console.log(rcptsSaved);
    console.log(txnSaved.id);
}

initModelLinks(models);

createStuff(txn, rcpts).then(() => models.sequelize.close());

// - make class
// - export
// - test via require
