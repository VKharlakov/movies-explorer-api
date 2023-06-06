require('dotenv').config();

const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

const NotAuthorizedError = require('../errors/NotAuthorized');

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    throw new NotAuthorizedError('Необходима авторизация');
  }

  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    next(err);
  }
  req.user = payload;
  next();
};
