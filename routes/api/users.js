const express = require('express')
const router = express.Router()

const {User} = require('../../db/models')

router.post('/create', (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((message) => {
      res.json({
        success: true,
        message: message
      })
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        message: err
      })
    })
})

module.exports = router
