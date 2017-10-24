const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: String,
  password: String, // Yes, I'm doing this
})

module.exports = UserSchema
