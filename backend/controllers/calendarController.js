const User = require("../models/userModel");
const Date = require("../models/dateModel");
const mongoose = require('mongoose');

const getCalendarData = async (req, res) => {
    let user = User.findOne().where("id").equals(req.params.userId);
    let dateList = user.history;
    dateList.exec(function(err, result){
        if (err) res.status(500).send("500 Server error");
        else if(result === null){
          res.status(404).send("The user does not exist.");
        }else{
          res.status(200).set("Content-Type","application/json").json(result);
        }
    });
}

const addNewDay = async (req, res) => {
    let date = new Date(req.body);

    // add it to the user's history
    date.save(function(err, result){
        if(err){
          console.log(err);
          res.status(400).send("Error saving the new date content."); //Schema violation
        }else{
          res.status(200).set("Content-Type", "application/json").json(date);
        }
      });
}

const addEODUptates = async (req, res) => {
    Date.findOne().where("_id").equals(req.params.dateId).exec(function(err, dateFound){
        if(err) return res.status(500).send("Server error.");
        if(dateFound === null){
            return res.status(404).send("Date record not found.");
        }

        dateFound["reflection"] = req.body["reflection"];
        dateFound["questionAns"] = req.body["questionAns"];
        dateFound["completed"] = req.body["completed"];
        dateFound["colour"] = req.body["colour"];

        new Date(dateFound).save(function(err, result){
            if(err){
                console.log(err);
                res.status(400).send("Improper body format");
            }else{
                res.status(200).set("Content-Type", "application/json").json(dateFound);
            }
        })
    })
}

module.exports = {getCalendarData, addNewDay, addEODUptates}