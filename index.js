const express = require('express');
const mongoose = require('mongoose');   
const DBConnection = require('./database/db.js');

const app = express();
const port = 8000;
DBConnection();


app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});