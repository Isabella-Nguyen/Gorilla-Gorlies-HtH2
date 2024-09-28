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

const { getCalendarData, addNewDay, addEODUptates } = require("../controllers/calendarController");

app.use(express.json()); // body-parser middleware

// GET all data to populate the calendar
router.get('/:userId', getCalendarData)

// GET data per day (prompt, reflection, notes)
// how do we know which day to retrieve data from?
router.get('/:userID/:day', (req, res) => {

})

// POST data entered at the end of the day
router.post('/:userId/', addNewDay)

// PUT update date object when user inputs reflection
router.put('/:dateId', addEODUptates);

// POST image when user finishes a challenge? is this necessary
router.post('/:userId/:challenge', (req, res) => {

})

module.exports = router;