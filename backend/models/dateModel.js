const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let dateSchema = Schema({
  id:{
    type: String,
    required: true
  },
  prompt:{
    type:  String,
  },
  reflection:{
    type: String
  },
  date:{
    type: Date,   // or just make it string?
    required: true
  },
  questionAns: {
    type: [{type: {String: String}}]
  },
  colour:{
    type: String
  },
  completed:{
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Date', dateSchema );