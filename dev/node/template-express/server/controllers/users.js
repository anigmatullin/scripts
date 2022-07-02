const User = require('../models/user');


class usersController
{
    constructor()
    {
        //
    }

    async index(req, res)
    {
        const rows = await User.find();
        res.json(rows);
    }

    async create(req, res)
    {
        //
    }
}

module.exports = new usersController();
