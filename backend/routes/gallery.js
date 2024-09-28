const express = require("express");
const path = require("path");
let router = express.Router();
const app = express();

const mongoose = require('mongoose');
let Date = require("../models/dateModel");
let Challenge = require("../models/challengeModel");
let Challenges = require("../models/challengesModel");
let Image = require("./models/imageModel");
let User = require("../models/userModel");

app.use(express.json()); // body-parser middleware

// GET images from User's images
router.get('/gallery/:userId', (req, res) => {

})