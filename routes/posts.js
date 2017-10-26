const express = require('express')
const router = express.Router()
const db = require('./../db/db')

router.post('/new', (req, res) => {
  db.createPost(Date.now(), req.body.text).then(doc => {
    res.json({
      success: true,
      message: doc,
    })
  }).catch(err => {
    res.status(500).json({
      success: false,
      message: err,
    })
  })
})

router.get('/all', (req, res) => {
  db.getAllPosts().then(query => {
    res.json({
      success: true,
      message: query,
    })
  }).catch(err => {
    res.status(500).json({
      success: false,
      message: err
    })
  })
})

module.exports = router
