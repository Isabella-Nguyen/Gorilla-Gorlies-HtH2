const User = require("../models/userModel");
const Challenge = require("../models/challengeModel");
const mongoose = require('mongoose');

const getChallengeData = async (req, res) => {
    let user = User.findOne().where("id").equals(req.params.userId);
    let challenge = user.Challenge;
    let resBody = {}
    if (challenge != NULL){
        resBody = {
            "day": challenge.day,
            "image":challenge.image,
            "prompt":user.currentDateObj.prompt
        }
    }
    resBody.exec(function(err, result){
        if (err) res.status(500).send("500 Server error");
        else if(result === null){
          res.status(404).send("The user does not exist.");
        }else{
          res.status(200).set("Content-Type","application/json").json(result);
        }
    });
}

const addNewChallenge = async (req, res) => {
    let newChallenge = new Challenge(req.body);
    
    newChallenge.save(function(err, result){
        if(err){
          console.log(err);
          res.status(400).send("Error saving the new challenge content."); //Schema violation
        }else{
            res.status(200).set("Content-Type", "application/json").json(newChallenge);
        }
    });
}

module.exports = {getChallengeData, addNewChallenge}