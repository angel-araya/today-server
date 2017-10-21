
const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  body: String,
  authorID: Number
})

module.exports = PostSchema