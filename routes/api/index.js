const express = require('express')
const router = express.Router()

const authRouter = require('./auth.js')
const postRouter = require('./posts.js')
const usersRouter = require('./users.js')
const adminRouter = require('./admin.js')

router.use('/auth', authRouter)
router.use('/posts', postRouter)
router.use('/users', usersRouter)
router.use('/admin', adminRouter)

module.exports = router
