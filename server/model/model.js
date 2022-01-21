const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,    
    exp : String,
    field : String,
    contact : String,
    status : String,
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;