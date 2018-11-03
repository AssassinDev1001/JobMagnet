var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userDataSchema = new Schema ({
    email: String,
    verified: Boolean,
    password: String,
    token: String,
    name: String,
    phone: String,
    paid: Boolean,
    affiliate: String,
    utbetalning: String
});

var UserData = mongoose.model('users', userDataSchema);

module.exports = UserData;
