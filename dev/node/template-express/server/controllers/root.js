const User = require('../models/user');

class rootController
{

    async index(req, res)
    {
        try {
            const info = {
                msg: "Salam"
            };
        
            const users = await User.find();
        
            res.json(users);
        }
        catch(err) {
            res.json({status: "error"});
        }
    }
}

module.exports = new rootController();
