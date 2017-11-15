
const { User } = require('./../db/models')

module.exports.validUser = (username, password) => {
  User.findOne({username, password}).then(user => {
    return true
  }).catch(err => {
    return false
  })
}
