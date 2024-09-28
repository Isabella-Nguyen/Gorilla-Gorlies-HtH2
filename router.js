const express = require("express");
const path = require("path");
let router = express.Router();
const app = express();

const firebaseAuth = require("./firebase_auth.js");

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('Please login')
})