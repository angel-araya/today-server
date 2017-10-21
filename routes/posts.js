

const express = require('express');
const router = express.Router();

router.post('/new', function (req, res) {
  console.log(req.body.text)
  res.json({
    success: true,
    message: 'Posted'
  })
})

module.exports = router
