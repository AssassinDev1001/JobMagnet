var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var logsSchema = new Schema ({
    uid: String,
    date: String,
    tag: String,
    info: String,
    ip: String
});

var LogsData = mongoose.model('log', logsSchema);

module.exports = LogsData;
