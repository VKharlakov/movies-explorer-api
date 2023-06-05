const { STATUS_NOT_AUTHORIZED } = require('../util/constants');

class NotAuthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = STATUS_NOT_AUTHORIZED;
  }
}

module.exports = NotAuthorizedError;
