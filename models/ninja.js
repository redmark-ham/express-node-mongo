const constants = require('../constants');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

// create ninja schema & model
const ninjaSchema = new schema ({
    name : {
        type: String,
        required:[true, constants.nameRequired]
    },
    rank: {
        type:String
    },
    available:{
        type: Boolean,
        default: false
    }
    // TODO: add in geo location
});

const ninjaModel = mongoose.model('Ninja', ninjaSchema);

module.exports = ninjaModel;
