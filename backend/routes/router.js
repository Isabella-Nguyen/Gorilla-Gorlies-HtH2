const express = require("express");
const path = require("path");
let router = express.Router();
const app = express();

const mongoose = require('mongoose');
let Date = require("../models/dateModel");
let Challenge = require("../models/challengeModel");
let Challenges = require("../models/challengesModel");
let Image = require("../models/imageModel");
let User = require("../models/userModel");

app.use(express.json()); // body-parser middleware

// All the below routes start with /app

// Challenge page

// GET challenge data (day, prompt, image)
router.get('/challenge/:userId', (req, res) => {
    let user = User.findOne().where("id").equals(req.params.userId);
    let challenge = user.Challenge;
    let resBody = {
        "day": challenge.day,
        "image":challenge.image
    }
    resBody.exec(function(err, result){
        if (err) res.status(500).send("500 Server error");
        else if(result === null){
          res.status(404).send("The user does not exist.");
        }else{
          res.status(200).set("Content-Type","application/json").json(result);
        }
    });
})

// Calendar page

// GET all data to populate the calendar
router.get('/calendar/:userId', (req, res) => {

})

// GET data per day (prompt, reflection, notes)
// how do we know which day to retrieve data from?
router.get('/calendar/:userID/:day', (req, res) => {

})

// POST data entered at the end of the day
router.post('calendar/:userId/:day', (req, res) => {
    // Data inputted from user will be in the request body
})

// POST image when user finishes a challenge? is this necessary
router.post('/calendar/:userId/:challenge', (req, res) => {

})

// Statistics page

// GET data from ??? how are we doing this

// Polaroids gallery

// GET images from User's images
router.get('/gallery/:userId', (req, res) => {

})

module.exports = router;