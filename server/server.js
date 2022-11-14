const express = require('express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
//Create server
const app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("sent back response");
});

//Turn on server
app.listen(PORT, function () {
    console.log("connected");
});


