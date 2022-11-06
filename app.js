const express = require('express')
const DB = require("./db");
const pathview = require('path')
var cors = require('cors');
var bodyparser = require("body-parser")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("./src/models/User")
const app = express()

// #############################################################################
// Logs all request paths and method
app.use(function (req, res, next) {
  res.set('x-timestamp', Date.now())
  res.set('x-powered-by', 'cyclic.sh')
  console.log(`server start`);
  next();
});
const AppRoutes = require("./src/routes/router")
app.use(AppRoutes);
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', pathview.join('src/views'));
app.use(cors()) // Use this after the variable declaration
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.post("/postlogin", async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(200).json({ message: "All input is required" });
        }
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json({ message: user.username, email: user.email, type: user.type, succes: "Goodluck" });
        }
        res.status(200).json({ message: "Invalid Credentials" });
    } catch (err) {
        console.log(err);
    }
});
app.post("/register", async (req, res) => {

    try {
        const { username, email, password, passwordConf } = req.body;
        if (username.lenght < 5) {
            res.status(200).json("password lenght must be 5")
        }
        if (!(email && password && username)) {
            res.status(200).json({ message: "All input is required" });
        }
        if (password !== passwordConf) {
            res.status(200).json({ message: "your confirm password in not matxhed to the old password" });

        }
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            res.status(200).json({ message: "User Already Exist. Please Login" });
        }
        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);
        // Create user in our database
        const user = await User.create({
            username,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
            type: "user",
        });
        // return new user
        res.status(200).json({ message: user.username, email: user.email, type: user.type, succes: "Goodluck" });
    } catch (err) {
        res.status(200).json(err);
    }
});
// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use(express.static('public', options))

// #############################################################################
// Catch all handler for all other request.
app.use('*', (req,res) => {
  res.json({
      at: new Date().toISOString(),
      method: req.method,
      hostname: req.hostname,
      ip: req.ip,
      query: req.query,
      headers: req.headers,
      cookies: req.cookies,
      params: req.params
    })
    .end()
})

module.exports = app
