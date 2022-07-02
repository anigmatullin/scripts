const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({

    name: {
        type: String,
        unique: true,
        required: true,
    },

},
{
    timestamps: true
}
);

const Role = mongoose.model('Role', schema);

module.exports = User;
