const { query } = require('express')
const express = require('express')
const { Op } = require("sequelize")

const app = express()

const models = require('./models')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))

app.set("view engine", "ejs")
app.set("appName", "NGM Mail Router")
app.set("x-powered-by", false)

app.listen(3000)

let delivery = [];
let connection = [];
let queue = [];

console.log(app.get("env"));


function prepareRes(data)
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
        filter.where = createFilter(searchLogic, filterItems);
    }

    return filter;
}



function getData(model, request = null)
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

    let query = createQuery(searchParams, searchLogic, offset, limit);

    console.log(query);
    console.log(searchLogic);

    return model.findAll(query);
};

app.get("/", (req, res) => {
    // res.json(delivery);
    res.render("delivery", {delivery: delivery});
});

// app.get("/about", (req, res) => {
//     res.render("about", {thename: 'Test'});
// });

// app.get("/form", (req, res) => {
//     res.render("form");
// });

// app.post("/form", (req, res) => {
//     let m = req.body.mail;
//     mails.push(m);
//     res.redirect("/");
// });

app.post("/api/delivery", (req, res) => {
    // console.log(req.body);
    delivery.push(req.body);
    models.Delivery.create(req.body);
    res.send("OK: ");
});

app.get("/api/delivery", (req, res) => {

    getData(models.Delivery, req.query.request)
    .then(prepareRes)
    .then(resp => res.json(resp));

});




app.post("/api/connection", (req, res) => {
    connection.push(req.body);
    models.Connection.create(req.body);
    res.send("OK");
});

app.get("/api/connection", (req, res) => {

    getData(models.Connection, req.query.request)
    .then(prepareRes)
    .then(resp => res.json(resp));

});


app.post("/api/queue", (req, res) => {
    console.log(req.body);
    queue.push(req.body);
    models.Transaction.create(req.body);
    res.send("OK");
});

app.get("/api/queue", (req, res) => {

    getData(models.Transaction, req.query.request)
    .then(prepareRes)
    .then(resp => res.json(resp));
});
