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

const { getChallengeData, addNewChallenge } = require("../controllers/challengeController");

app.use(express.json()); // body-parser middleware

// GET challenge data (day, prompt, image)
router.get('/:userId', getChallengeData);

// POST new challenge
router.post('/', addNewChallenge);

// PUT update user by adding new challenge
router.put('/:userId/:challenge')

module.exports = router;