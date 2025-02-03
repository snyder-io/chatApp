require('dotenv').config();
const express = require('express');
const app = express();

const homeRoute = require('./routes/home.routes')

app.use('/', homeRoute);

app
    .listen(process.env.PORT, () => {
        console.log(`Server is online at ${process.env.PORT}`);

    })