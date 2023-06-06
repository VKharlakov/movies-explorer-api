const router = require('express').Router();

const userRoutes = require('./users');
const movieRoutes = require('./movies');
const signinRoute = require('./signin');
const signoutRoute = require('./signout');
const signupRoute = require('./signup');
const { getInvalidURL } = require('../util/utilities');
const auth = require('../middlewares/auth');

router.use('/signin', signinRoute);
router.use('/signup', signupRoute);
router.use(auth);
router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/signout', signoutRoute);
router.all('*', getInvalidURL);

module.exports = router;
