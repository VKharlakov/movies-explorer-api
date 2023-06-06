//  Центральный обработчик всех ошибок
function handleAllErrors(err, req, res, next) {
  const { statusCode = 500, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? 'На сервере произошла ошибка'
        : message,
    });

  next();
}

//  Обработчик неправильного адреса
const NotFoundError = require('../errors/NotFound');
const { RESOURCE_NOT_FOUND_MESSAGE } = require('./constants');

function getInvalidURL(req, res, next) {
  next(new NotFoundError(RESOURCE_NOT_FOUND_MESSAGE));
}

module.exports = {
  handleAllErrors,
  getInvalidURL,
};
