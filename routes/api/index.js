const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const authRouter = require('./auth.js')
const postRouter = require('./posts.js')
const usersRouter = require('./users.js')
const adminRouter = require('./admin.js')

router.use('/auth', authRouter)

router.use((req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-auth-token']

  if (!token) {
    res.status(403).json({
      success: false,
      message: 'Authentication failure: No token was submited',
    })
  } else {
    //TODO: change secret for a real secret? What is it for anyway?
    jwt.verify(token, 'secret', (error, decoded) => {
      if (error) {
        res.status(403).json({
          success: false,
          message: 'Authentication failure: token not valid',
        })
      } else {
        req.decoded = decoded
        next()
      }
    })
  }
})

router.use('/posts', postRouter)
router.use('/users', usersRouter)
router.use('/admin', adminRouter)

module.exports = router
