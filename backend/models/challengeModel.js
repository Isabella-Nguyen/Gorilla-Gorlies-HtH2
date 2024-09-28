const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let challengeModel = Schema({
  id:{
    type: String,
    required: true
  },
  streak: {
    type: Number
  },
  day: {
    type: Number
  },
  image: {
    type: Schema.Types.ObjectId,
    ref: 'Image',
    required: true
  }
});

module.exports = mongoose.model('Challenge', challengeModel );