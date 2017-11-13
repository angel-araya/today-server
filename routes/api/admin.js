const express = require('express')
const router = express.Router()

const sequelize = require('./../../db')

router.delete('/db/reset', (req, res) => {
  sequelize.sync({force: true})
  .then(() => {
    res.json({
      success: true,
      message: ''
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
