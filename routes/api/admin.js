const express = require('express')
const router = express.Router()

const sequelize = require('./../../db')

router.delete('/db/reset', async (req, res) => {
  try {
    let result = await sequelize.sync({force: true})
    res.json({
      success: true,
      message: result
    })
  } catch(err) {
    res.status(409).json({
      success: false,
      message: err
    })
  }
})

module.exports = router
