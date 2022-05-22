const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userController = require("./Controller/user.controller");
const lessonController = require("./Controller/lesson.controller");
require("dotenv").config();
app.use(express.json());


// Initialisation connection bd
const uri = process.env.MONGO_URI;
console.log(uri);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to mongo at ${uri}`));

// configuration server et routage


// lancement application et mapping controller
async function startApplication(){
    console.log("start application");
    app.listen(process.env.PORT || 8080);
    userController("/api/user", app);
    lessonController("/api/lessons", app);
}

module.exports = {startApplication, app};