const models = require('../../models')

module.exports = class CtrlRelayGroup
{
    async create(req, res)
    {
        let params = {};
        res.render("routing/relaygrp-add.ejs", params);
    }

    async createHandle(req, res)
    {
        models.RelayGroup.create(req.body)
        .then(inp => {
            let url = "/config/relaygrp";
            res.redirect(url);
        });
    }

    async edit(req, res)
    {
        let id = +req.params.id;

        models.RelayGroup.findByPk(id)
            .then(data => {
    
                let params = {
                    data: data
                };
    
                res.render("routing/relaygrp-edit.ejs", params);
            
            });
    }

    async editHandle(req, res)
    {
        let id = +req.params.id;

        models.RelayGroup.findByPk(id)
            .then(async data => {
                await data.update(req.body);
                await data.save();
            })
            .then(inp => {
                let url = "/config/relaygrp";
                res.redirect(url);
            });
    
    }

    async delete(req, res)
    {
        let id = +req.params.id;

        models.RelayGroup.findByPk(id)
            .then(data => {
    
                let params = {
                    data: data
                };
    
                res.render("routing/relaygrp-delete.ejs", params);
            
            });
    }

    async deleteHandle(req, res)
    {
        let id = +req.params.id;

        models.RelayGroup.findByPk(id)
            .then(async data => {
                await data.destroy();
            })
            .then(inp => {
                let url = "/config/relaygrp";
                res.redirect(url);
            });
    
    }


    async details(req, res)
    {
        let id = +req.params.id;

        let op = {
            where: {
                group_id: id
            }
        };
    
        let relays = await models.Relay.findAll(op);
    
        models.RelayGroup.findByPk(id)
        .then(data => {
    
            let params = {
                data: data,
                relays: relays,
            };
    
            res.render("routing/relaygrp-details.ejs", params);
        })
    }

    async index(req, res)
    {
        models.RelayGroup.findAll()
        .then(data => {
    
            let params = {
                data: data
            };
    
            res.render("routing/index.ejs", params);
        })
        
    }
}
