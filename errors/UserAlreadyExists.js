const { STATUS_ALREADY_EXISTS } = require('../util/constants');

class UserAlreadyExists extends Error {
  constructor(message) {
    super(message);
    this.statusCode = STATUS_ALREADY_EXISTS;
  }
}

module.exports = UserAlreadyExists;
