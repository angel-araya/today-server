const express = require('express')
const jwt = require('jsonwebtoken')

const { userActions } = require('./../../actions')

const router = express.Router()

router.post('/', (req, res) => {
  if (!userActions.validUser(req.body.username, req.body.password)) {
    res.status(401).json({
      success: false,
      message: 'Wrong user/password',
    })
  }
  const token = jwt.sign(payload, process.env.JWT_TOKEN, {
    expiresIn: '7 day',
  })

  res.json({
    success: true,
    message: 'Authenticated',
    token: token,
  })
})

module.exports = router
