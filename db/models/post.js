const mongoose = require('mongoose')
const User = require('./user')

const PostSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  body: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})

module.exports = mongoose.model('Post', PostSchema)
