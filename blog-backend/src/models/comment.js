const mongoose = require('mongoose');

const { Schema } = mongoose;

const comment = new Schema({
  clientId: String,
  body: String,
  writeDate: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('comment', comment);