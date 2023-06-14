const router = require('express').Router();
const { celebrate } = require('celebrate');
const { login } = require('../controllers/users');
const { loginValidation } = require('../util/validation');

router.post('/', celebrate(loginValidation), login);

module.exports = router;
