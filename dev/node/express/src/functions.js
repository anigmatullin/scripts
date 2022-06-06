
const { Op } = require("sequelize")
const models = require('../models')

module.exports.prepareRes = function (data)
{
    // for (let i=0; i<data.length; i++) {
    //     data[i].recid = data[i].id;
    // }

    let resp = {
        status: "success",
        total: data.length,
        records: data
    }

    return resp;
};


module.exports.createFilter = function (searchLogic, items)
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

module.exports.createQuery = function (params, searchLogic, offset = 0, limit = 100)
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

        if (!item.value) {
            return;
        }

        let res = {};
        res[item.field] = {};

        if (item.operator == "begins") {
            res[item.field][Op.startsWith] = item.value;
        }
        else if (item.operator == "is") {
            res[item.field][Op.eq] = item.value;
        }
        else if (item.operator == "contains") {
            res[item.field][Op.like] = `%${item.value}%`;
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

        else if (item.operator == "less") {
            res[item.field][Op.lt] = item.value;
        }
        else if (item.operator == "more") {
            res[item.field][Op.gt] = item.value;
        }
        

        filterItems.push(res);
    });

    // console.log(filterItems);

    if (filterItems) {
        filter.where = module.exports.createFilter(searchLogic, filterItems);
    }

    return filter;
}



module.exports.getData =  function(model, request = null)
{
    let limit = 100;
    let offset = 0;
    let searchParams = [];
    let searchLogic = "AND";

    if (request) {
        
        let q = JSON.parse(request);
        console.log(q);
        limit = q.limit;
        offset = q.offset;

        if (q.search) {
            searchParams = q.search;
            searchLogic = q.searchLogic;
        }
    }

    let query = module.exports.createQuery(searchParams, searchLogic, offset, limit);

    console.log(query);
    console.log(searchLogic);

    return model.findAll(query);
};


module.exports.checkMD5 = async function (items)
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
