const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },

    email: {
        type: String,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    roles: [{
        type: String,
        ref: 'Role',
    }]
},
{
    timestamps: true
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;
