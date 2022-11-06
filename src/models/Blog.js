const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Blog = new Schema({
  title: {
    type: String,
  },
 text:{
    type: String,
  },
  image:{
    type: String,
  },
}, {
  timestamps: true,
});
const BlogModel = mongoose.model('Blog', Blog);
module.exports = BlogModel;