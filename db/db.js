const mongoose = require('mongoose')
const Post = require('./models/post')
const User = require('./models/user')

function connect (uri) {
  let options = {
    promiseLibrary: global.Promise,
    useMongoClient: true,
  }
  mongoose.connect(uri, options)

  mongoose.connection.on('error', () => {
    console.error('Connection error')
    process.exit(0)
  })

  mongoose.connection.once('open', () => {
    console.log('Connection stablished')
  })
}

function createPost (date, body) {
  let post = new Post({
    date: date || Date.now(),
    body: body
  })
  return post.save()
}

function getAllPosts() {
  return Post.find({})
}

module.exports = {
  connect,
  createPost,
  getAllPosts,
}
