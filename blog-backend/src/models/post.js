const mongoose = require('mongoose');

const { Schema } = mongoose;

const comment = new Schema({
  clientId: String,
  body: String,
  writeDate: {
    type: Date,
    default: new Date()
  }
});

const Post = new Schema({
  title: String,
  body: String,
  tags: [String], // 문자열의 배열
  publishedDate: {
    type: Date,
    default: new Date() // 현재 날짜를 기본값으로 지정
  },
  comments: [comment]
});

module.exports = mongoose.model('Post', Post);

