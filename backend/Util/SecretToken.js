require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (user) => {
  return jwt.sign( {_id:user._id, username:user.username} , process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};