require('dotenv').config();
const jwt = require('jsonwebtoken');
const NotAuthorizedError = require('../errors/NotAuthorized');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    next(new NotAuthorizedError('Необходима авторизация'));
    return;
  }

  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    next(new NotAuthorizedError('Необходима авторизация'));
    return;
  }
  req.user = payload;
  next();
};
