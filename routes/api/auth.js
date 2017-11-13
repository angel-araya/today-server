const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.get('/', (req, res) => {
  if (req.query.user === 'angel' && req.query.password === 'damian') {
    const payload = {
      authenticated: true,
    }

    const token = jwt.sign(payload, 'secret', {
      expiresIn: '7 day',
    })

    res.json({
      success: true,
      message: 'Authenticated',
      token: token,
    })
  }
  else {
    res.status(401).json({
      success: false,
      message: 'Wrong user/password',
    })
  }
})

module.exports = router
