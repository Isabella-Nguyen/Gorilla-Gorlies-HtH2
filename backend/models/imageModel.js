const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let imageSchema = Schema({
  id:{
    type: String,
    required: true
  },
  path:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Image', imageSchema );