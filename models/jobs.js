var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSearchData = new Schema ({
    epostadress: String,
    arbetsplatsnamn: String,
    kommunnamn: String,
    yrkesbenamning: String,
    annonsrubrik: String,
    annonstext: String,
    anstallningstyp: String,
    arbetstid: String,
    lan: String,
    publiceraddatum: String,
    varaktighet: String
});

var UserSearch = mongoose.model('job', userSearchData);

module.exports = UserSearch;
