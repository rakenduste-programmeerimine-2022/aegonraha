const User = require('../models/user.model')

exports.signup = async (req, res) => {
  User.signup(req.body)
    .then((data) => res.send(`Done ${data}`))
    .catch((err) => res.send(`Failed ${err}`))
}

exports.login = async (req, res) => {}

exports.protected = async (req, res) => {}
