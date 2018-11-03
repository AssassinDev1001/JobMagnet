var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var blogData = new Schema ( {
  internal: Boolean,
  code: String,
  title: String,
  date: String,
  author: String,
  text: String,
  short: String,
  img: String
});

var Blog = mongoose.model('blogs', blogData);

module.exports = Blog;
