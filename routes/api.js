const express = require('express')
const router = express.Router()

const authRouter = require('./auth.js')
const postRouter = require('./posts.js')
const usersRouter = require('./users.js')

router.use('/auth', authRouter)
router.use('/posts', postRouter)
router.use('/users', usersRouter)

module.exports = router
