require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
// const config = require('./config.js');
// let Type = require("./models/typeModel");

const PORT = process.env.PORT || 8000;

const challengeRouter = require("./routes/challenge.js");
const calendarRouter = require("./routes/calendar.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req,_,next)=> {
    console.log(`${req.method}: ${req.url}`);
    if (Object.keys(req.body).length > 0){
        console.log('Body:');
        console.log(req.body);
    }
    next();
});

app.use("/challenge", challengeRouter);
app.use("/calendar", calendarRouter);

// other routes not under app (liek auth?)

// start/initialize mongodb connection and port connection
// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
