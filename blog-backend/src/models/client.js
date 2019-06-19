const mongoose = require('mongoose');

const { Schema } = mongoose;

const Client = new Schema({
  email: String,
  password: String,
  name: String,
  phone: String,
  addr: String,
  joinDate: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('Client', Client);