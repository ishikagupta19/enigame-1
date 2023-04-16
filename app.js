
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const path = require('path');

dotenv.config({path: './config.env'}); 
require('./db/conn');


app.use(express.json());
//we are linking the router files to make our route easy
app.use(require('./router/auth'));

// /static files
if (process.env.NODE_ENV=== 'production') {
    app.use(express.static('client/build'));
    app.get('*',(req,res) => {
        res.sendFile(path.join(__dirname , 'client' , 'build' , 'index.html'))
    })
}

const PORT = process.env.PORT || 5000;

app.get('/signin', (req,res) => {
    res.send("Hello signin from the developer world");
});

app.get('/signup', (req,res) => {
    res.send("Hello signup from the developer world");
});

app.get("/getData", async(req, res) => {
    try{
        const Data = await Data.find({});
        res.send({status:"ok", data:Data});
    } catch(error){
        console.log(error);
    }
});

if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`)
})

