const { RESOURCE_NOT_FOUND } = require('../util/constants');

class NotFound extends Error {
  constructor(message) {
    super(message);
    this.statusCode = RESOURCE_NOT_FOUND;
  }
}

module.exports = NotFound;
