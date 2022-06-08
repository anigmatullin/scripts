const models = require('../models')

// models.HashLookup.belongsToOne

models.v_lookup.findAll().then(data => console.log(data));

