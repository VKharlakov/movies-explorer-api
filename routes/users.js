const router = require('express').Router();
const { celebrate } = require('celebrate');
const { getUserById, updateUser } = require('../controllers/users');
const { updateUserValidation } = require('../util/validation');

router.get('/me', getUserById);
router.patch('/me', celebrate(updateUserValidation), updateUser);

module.exports = router;
