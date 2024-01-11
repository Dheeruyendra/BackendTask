const express = require('express');
const mongoose = require('mongoose');   
const DBConnection = require('./database/db.js');
const router = require('./routers/router.js');

const app = express();
const port = 8000;
DBConnection();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});