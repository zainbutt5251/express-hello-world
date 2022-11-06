const Blog = require("../models/Blog")
const Article = require("../models/Article")


exports.homepage = (req, res) => {
    res.render('index.ejs');
};
exports.login = (req, res) => {
    res.render('login.ejs');
};


exports.Dashboard = (req, res) => {
    res.render("Dashboard.ejs");
};

exports.Blogs =  async  (req, res)=> {
    res.render("Blog.ejs")
}
exports.getBlogs =  async  (req, res)=> {
    Blog.find().lean()
   .exec((err, items)=>{
        if(!err){
            return res.json({items: items})
        }
    })
}


exports.Article =  async  (req, res)=> {
    res.render("Article.ejs")
}
exports.getArticle =  async  (req, res)=> {
    Article.find().lean()
   .exec((err, items)=>{
        if(!err){
            return res.json({items: items})
        }
    })
}
