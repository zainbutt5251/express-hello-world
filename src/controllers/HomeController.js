const Blog = require("../models/Blog")
const Article = require("../models/Article")


exports.homepage = (req, res) => {
    res.render('home.ejs');
};
exports.register = (req, res) => {
    res.render('register.ejs');
};
exports.login = (req, res) => {
    console.log("i,m in login page")
    res.render('login.ejs');
};


exports.Dashboard = (req, res) => {
    console.log("i,m in login dashboard")

    res.render("Dashboard.ejs");
};

exports.Blogs = async (req, res) => {
    res.render("Blog.ejs")
}
exports.getBlogs = async (req, res) => {
    Blog.find().lean()
        .exec((err, items) => {
            if (!err) {
                return res.json({ items: items })
            }
        })
}


exports.Article = async (req, res) => {
    res.render("Article.ejs")
}
exports.getArticle = async (req, res) => {
    Article.find().lean()
        .exec((err, items) => {
            if (!err) {
                return res.json({ items: items })
            }
        })
}
