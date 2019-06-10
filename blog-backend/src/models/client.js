const mongoose = require('mongoose');

const { Schema } = mongoose;

const Client = new Schema({
  email: String,
  password: String,
  first_name: String,
  last_name: String,
  phone: String,
  addr: String,
  joinDate: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model('Client', Client);