const { Op } = require("sequelize");
const models = require('../models');


// const hash = "3d2a16853ea8014cd81550d88f0bc690";

// let op = {
//     where: {
//         md5: { [Op.in]: [hash, "hey"] }
//     }
// }

// models.BlockMD5.findAll(op).then(data => console.log(data));

async function checkMD5(items)
{
    let md5 = [];

    items.forEach(el => {
        if (el?.md5) {
            md5.push(el.md5);
        }
    });

    let op = {
        where: {
            md5: { [Op.in]: md5 }
        }
    }

    let promise = models.BlockMD5.findAll(op);
    return promise;
}

let list = [
    {
        md5: "3d2a16853ea8014cd81550d88f0bc690"
    },
    {
        md5: "hey"
    }
];

checkMD5(list).then(data => {
    if (data.length) {
        console.log("Match!");
    }
    else {
        console.log("No Match!");
    }
});
