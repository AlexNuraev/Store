const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');

process.on('uncaughtException', (err) => {
    console.log(err);
    console.log('uncaughtException');
    process.exit();
});

const DB = "mongodb+srv://alex:alex@store.fgyj3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((con) => {
        // console.log(con);
        console.log('The Data Base Connected Successfully');
    });