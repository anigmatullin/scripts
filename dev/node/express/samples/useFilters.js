const models = require('../models');
const { Op } = require("sequelize");


let sample = 
[
    { field: 'uuid',type: 'text', operator: 'begins', value: 'send' },
    { field: 'encoding', type: 'text', operator: 'begins', value: 'send' },
    { field: 'sender', type: 'text', operator: 'begins', value: 'send' },
    { field: 'rcpt_list', type: 'text', operator: 'begins', value: 'send' }
];

let op = "OR";


///////////////////////////////////////////////////////////////////////////


function createFilter(searchLogic, items)
{
    if (searchLogic == "OR") {
        return {
            [Op.or]: items
        }
    }
    else {
        return {
            [Op.and]: items
        } 
    }
}


function createQuery(params, searchLogic, offset = 0, limit = 100)
{
    // possibile w2ui search ops
    //
    /**
    
    {
    'text'    : ['is', 'begins', 'contains', 'ends'], // could have "in" and "not in"
    'number'  : ['=', 'between', '>', '<', '>=', '<='],
    'date'    : ['is', 'between', { oper: 'less', text: 'before'}, { oper: 'more', text: 'after' }],
    'list'    : ['is'],
    'hex'     : ['is', 'between'],
    'color'   : ['is', 'begins', 'contains', 'ends'],
    'enum'    : ['in', 'not in']
    }
     */

    let filter = {
        limit: limit,
        offset: offset,
        where: null,
    }

    let filterItems = [];

    params.forEach(item => {
        //
        let res = {};
        res[item.field] = {};

        if (item.operator == "begins") {
            res[item.field][Op.startsWith] = item.value;
        }
        else if (item.operator == "is") {
            res[item.field][Op.eq] = item.value;
        }
        else if (item.operator == "contains") {
            res[item.field][Op.contains] = item.value;
        }
        else if (item.operator == "ends") {
            res[item.field][Op.endsWith] = item.value;
        }
        else if (item.operator == "between") {
            res[item.field][Op.between] = item.value; // 2 values should be here. need to test!
        }
        else if (item.operator == "=") {
            res[item.field][Op.eq] = item.value;
        }
        else if (item.operator == ">") {
            res[item.field][Op.gt] = item.value;
        }
        else if (item.operator == ">=") {
            res[item.field][Op.gte] = item.value;
        }
        else if (item.operator == "<") {
            res[item.field][Op.lt] = item.value;
        }
        else if (item.operator == "<=") {
            res[item.field][Op.lte] = item.value;
        }
        

        filterItems.push(res);
    });

    console.log(filterItems);

    if (filterItems) {
        filter.where = createFilter(searchLogic, filterItems);
    }
    

}


let q = createQuery(sample, op)

models.Transaction.findAll(q)
    .then(data => console.log("found: " + data.length))
    .then(() => models.sequelize.close());

