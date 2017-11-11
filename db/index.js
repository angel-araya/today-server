const Sequelize = require('sequelize')
const sequelize = new Sequelize('today', 'today', '5bqvwsz@Pd', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
  },
  logging: false,
})

sequelize.authenticate()
  .then(() => {
    console.log(`Authenticated to the DB`)
  })
  .catch((err) => {
    console.log(`Error while authenticating: ${err}`)
    process.exit(1)
  })

sequelize.sync()
  .then(() => {
    console.log('DB sync successful')
  })
  .catch((err) => {
    console.log(`Cant sync to the DB: ${err}`)
    process.exit(1)
  })

module.exports = sequelize
