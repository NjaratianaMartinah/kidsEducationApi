const express = require('express');
const mongoose = require('mongoose');
const app = express();


// Initialisation connection bd
const uri = "mongodb://localhost:27017/ekaly";
console.log(uri);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to mongo at ${uri}`));

// configuration server et routage


// lancement application et mapping controller
async function startApplication(){
    app.listen(process.env.PORT || 8080);
}

module.exports = {startApplication, app};