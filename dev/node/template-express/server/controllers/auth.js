const jwt = require('jsonwebtoken');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const secretkey = process.env.APP_KEY || "dontuse!";
const token_time = '15m';

class authController
{
    constructor()
    {
        this.authUser = this.authUser.bind(this);
        this.index = this.index.bind(this);
        this.login = this.login.bind(this);
        this.checkToken = this.checkToken.bind(this);
    }

    async authUser(name, pass)
    {
        try {
            let user = await User.findOne({name});

            if (!user) {
                return false;
            }

            if (!user.password) {
                return false;
            }

            // console.log(user._id);

            return bcrypt.compareSync(pass, user.password);
        }
        catch(err) {
            console.log(err);
        }
    }
    

    async index(req, res, next)
    {
        try {
            //
            const reply = {
                msg: "Surinam"
            }
            res.json(reply);
        }
        catch(err) {
            console.log(err);
            res.sendStatus(403);
        }

    }

    async login(req, res)
    {
        let userid = await this.authUser(req.body.user, req.body.pass);
    
        if (!userid) {
            //access denied
            setTimeout(() => {
                res.sendStatus(403);
            }, 3000);
        }
        else {
    
            const user = {
                id: userid,
                name: req.body.user,
            };
        
            jwt.sign({user}, secretkey, {expiresIn: token_time}, (err, token) => {
                res.json({token});
            });
        }
    
    }


    checkToken(req, res, next)
    {
        //middleware to check token
        //Authorization: Bearer <token>
        const authhdr = req.get('Authorization');

        //check if undefined
        if (!authhdr) {
            res.sendStatus(403);
            return;
        }

        let decoded = null;
        let [ignore, token] = authhdr.split(" ");

        try {
            decoded = jwt.verify(token, secretkey);
            req.token = decoded;
            req.user = decoded.user.name;
            console.log(req.user);
        }
        catch (err) {
            res.sendStatus(403);
            return;
        }

        next();
    }
}

module.exports = new authController();
