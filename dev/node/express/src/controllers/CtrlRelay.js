const models = require('../../models')

module.exports = class CtrlRelay
{
    async create(req, res)
    {
        let id = +req.params.group_id;

        let params = {
            group_id: id
        };

        res.render("routing/relay-add.ejs", params);   
    }

    async createHandle(req, res)
    {
        let group_id = +req.params.group_id;
        let url = `/config/relaygrp/${group_id}`;

        models.Relay.create(req.body)
        .then(inp => {
            res.redirect(url);
        });
    }

    async edit(req, res)
    {
        let id = +req.params.id;

        models.Relay.findByPk(id)
            .then(data => {
    
                let params = {
                    data: data,
                    group_id: data.group_id,
                };
    
                res.render("routing/relay-edit.ejs", params);
            
            });
    }

    async editHandle(req, res)
    {
        let id = +req.params.id;

        models.Relay.findByPk(id)
            .then(async data => {
                await data.update(req.body);
                await data.save();
                return data;
            })
            .then(data => {
                let url = `/config/relaygrp/${data.group_id}`;
                res.redirect(url);
            });
    }

    async delete(req, res)
    {
        let id = +req.params.id;

        models.Relay.findByPk(id)
            .then(data => {
    
                let params = {
                    data: data
                };
    
                res.render("routing/relay-delete.ejs", params);
            
            });
    }

    async deleteHandle(req, res)
    {
        let id = +req.params.id;

        models.Relay.findByPk(id)
            .then(async data => {
                let group_id = data.group_id;
                await data.destroy();
                return group_id;
            })
            .then(group_id => {
                let url = `/config/relaygrp/${group_id}`;
                res.redirect(url);
            });
    
    }
}
