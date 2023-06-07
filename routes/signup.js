const router = require('express').Router();
const { celebrate } = require('celebrate');
const { createUser } = require('../controllers/users');
const { createUserValidation } = require('../util/validation');

router.post('/', celebrate(createUserValidation), createUser);

module.exports = router;
