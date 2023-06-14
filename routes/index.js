const router = require('express').Router();

const userRoutes = require('./users');
const movieRoutes = require('./movies');
const signinRoute = require('./signin');
const signoutRoute = require('./signout');
const signupRoute = require('./signup');
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFound');

router.use('/signin', signinRoute);
router.use('/signup', signupRoute);
router.use(auth);
router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/signout', signoutRoute);

router.use('*', (req, res, next) => {
  next(new NotFoundError('Такой страницы не существует'));
});

module.exports = router;
