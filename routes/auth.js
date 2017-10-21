const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

router.post('/', function (req, res) {
  if (req.body.user === 'angel' && req.body.password === 'damian') {
    const payload = {
      authenticated: true
    }

    const token = jwt.sign(payload, 'secret', {
      expiresIn: '1 day'
    })

    res.json({
      success: true,
      message: 'Authenticated',
      token: token
    })
  }
  else {
    res.status(401).json({
      success: false,
      message: 'Wrong user/password'
    })
  }
})

router.use(function (req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-auth-token']

  if (!token) {
    res.status(403).json({
      success: false,
      message: 'Not authenticated'
    })
  } else {
    jwt.verify(token, 'secret', function (error, decoded) {
      if (error) {
        res.status(403).json({
          success: false,
          message: "Not authenticated"
        })
      } else {
        req.decoded = decoded
        next()
      }
    })
  }
})

module.exports = router;
