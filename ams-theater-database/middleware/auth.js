const jwt = require('jsonwebtoken');
const config = require('config');

//middleware to authenticate the JWT Token
module.exports = function (req, res, next) {
  //Get token from header
  const token = req.header('x-auth-token');

  //if no token return 401 not authorized
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' }); //if token is not valid
  }
};
