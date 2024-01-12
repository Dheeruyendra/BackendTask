const express = require('express');
const mongoose = require('mongoose');   
const DBConnection = require('./database/db.js');
const router = require('./routes/router.js');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT;
DBConnection();

//rate limiting based on IP address
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});

//middleware
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router); // using router as middleware

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});