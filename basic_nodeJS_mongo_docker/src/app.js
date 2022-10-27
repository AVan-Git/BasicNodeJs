const express = require('express');

const key = require('./config/main');

const { port } = key;


const app = express();

app.get('/', () => {
    console.log("bac");
})


app.listen(port, () => console.log(`Server is running in port ${port}`))