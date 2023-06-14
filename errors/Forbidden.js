const { STATUS_FORBIDDEN } = require('../util/constants');

class Forbidden extends Error {
  constructor(message) {
    super(message);
    this.statusCode = STATUS_FORBIDDEN;
  }
}

module.exports = Forbidden;
