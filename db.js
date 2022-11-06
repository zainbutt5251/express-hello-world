const mongoose = require('mongoose')

const url = "mongodb+srv://butt4040:RPEe7Rk3Sto8bOlV@authentication.vu8gmok.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url)
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    })