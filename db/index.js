const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DB_NAME,
                                process.env.DB_USER,
                                process.env.DB_PASS, {
  host: process.env.HOST,
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
    console.log(`Error while authenticating: ${JSON.stringify(err, undefined, 2)}`)
    process.exit(1)
  })

sequelize.sync()
  .then(() => {
    console.log('DB sync successful')
  })
  .catch((err) => {
    console.log(`Cant sync to the DB: ${JSON.stringify(err, undefined, 2)}`)
    process.exit(1)
  })

module.exports = sequelize
