require('dotenv').config();
const express = require('express');

const port = process.env.SERVERPORT;
const app =  express();

app.get('/', (req, res, next) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log(`The app is running at http://localhost:${port}`);
});