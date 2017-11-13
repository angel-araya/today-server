const Sequelize = require('sequelize')
const sequelize = require('..')
const User = require('./user.js')

const Post = sequelize.define('post', {
  body: {
    type: Sequelize.TEXT,
  },
})


Post.belongsTo(User)

module.exports = Post
