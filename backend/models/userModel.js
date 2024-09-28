const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = Schema({
  id:{
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  currentChallenge:{
    type: Schema.Types.ObjectId, 
    ref: 'Challenge'
  },
  history:[{
    type: Schema.Types.ObjectId,
    ref: 'Date'
  }],
  completedImages:{
    type: Schema.Types.ObjectId,
    ref: 'Image'
  },
  currentDateObj:{
    type: Schema.Types.ObjectId,
    ref: 'Date'
  }
});

module.exports = mongoose.model('User', userSchema );