const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: String,
  password: String, // Yes, I'm doing this
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }],
})

module.exports = mongoose.model('User', UserSchema)
