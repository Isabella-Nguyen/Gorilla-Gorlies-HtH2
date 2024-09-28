const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let challengesModel = Schema({
  id:{
    type: String,
    required: true
  },
  type20:{
    type: [{
        type: Schema.Types.ObjectId, 
        ref: 'Image'
      }],
    required: true
  },
  type50:{
    type: [{
        type: Schema.Types.ObjectId, 
        ref: 'Image'
      }],
    required: true
  },
  type100:{
    type: [{
        type: Schema.Types.ObjectId, 
        ref: 'Image'
      }],
    required: true
  },
  prompts:[{
    type: String
  }]
});

module.exports = mongoose.model('Challenges', challengesModel );