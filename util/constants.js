const BAD_REQUEST = 400;
const STATUS_NOT_AUTHORIZED = 401;
const STATUS_FORBIDDEN = 403;
const RESOURCE_NOT_FOUND = 404;
const STATUS_ALREADY_EXISTS = 409;
const GENERAL_ERROR = 500;
const GENERAL_ERROR_MESSAGE = 'Возникла ошибка';
const BAD_REQUEST_MESSAGE = 'Введены некорректные данные';
const ALREADY_EXISTS_MESSAGE = 'Такой пользователь уже зарегистрирован';
const RESOURCE_NOT_FOUND_MESSAGE = 'Неправильный адрес страницы';
const USER_NOT_FOUND_MESSAGE = 'Пользователь не найден';
const USERS_NOT_FOUND_MESSAGE = 'Пользователи не найдены';
const CARDS_NOT_FOUND_MESSAGE = 'Фильмы не найдены';
const CARD_NOT_FOUND_MESSAGE = 'Фильм не найден';
const DELETION_NOT_AUTHORIZED_MESSAGE = 'Можно удалять только свои фильмы';

const STATUS_OK = 200;
const STATUS_OK_CREATED = 201;
const SUCCESSFUL_AUTHORIZATION_MESSAGE = 'Авторизация прошла успешно';
const SUCCESSFUL_LOGOUT_MESSAGE = 'Вы вышли из системы';

const JWT_TOKEN_EXPIRES = '7d';
const COOKIE_MAX_AGE = 3600000 * 24 * 7;

const urlRegEx = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-/])*)?/;

module.exports = {
  GENERAL_ERROR,
  GENERAL_ERROR_MESSAGE,
  RESOURCE_NOT_FOUND,
  RESOURCE_NOT_FOUND_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
  USERS_NOT_FOUND_MESSAGE,
  CARDS_NOT_FOUND_MESSAGE,
  CARD_NOT_FOUND_MESSAGE,
  DELETION_NOT_AUTHORIZED_MESSAGE,
  STATUS_NOT_AUTHORIZED,
  BAD_REQUEST,
  STATUS_ALREADY_EXISTS,
  STATUS_FORBIDDEN,
  ALREADY_EXISTS_MESSAGE,
  BAD_REQUEST_MESSAGE,
  STATUS_OK_CREATED,
  STATUS_OK,
  SUCCESSFUL_AUTHORIZATION_MESSAGE,
  SUCCESSFUL_LOGOUT_MESSAGE,
  JWT_TOKEN_EXPIRES,
  COOKIE_MAX_AGE,
  urlRegEx,
};
