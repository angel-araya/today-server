const express = require('express')
const router = express.Router()

router.post('/new', (req, res) => {
  res.status(401).json({
    success: false,
    message: {
      error: 'Not implemented'
    }
  })
})

router.get('/all', (req, res) => {
  res.status(401).json({
    success: false,
    message: {
      error: 'Not implemented'
    }
  })
})

module.exports = router
