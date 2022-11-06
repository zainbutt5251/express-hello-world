const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Article = new Schema({
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  image: {
    type: String,
  },
}, {
  timestamps: true,
});
const ArticleModel = mongoose.model('Article', Article);
module.exports = ArticleModel;