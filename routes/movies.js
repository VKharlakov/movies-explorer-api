const router = require('express').Router();
const { celebrate } = require('celebrate');
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { createMovieValidation, deleteMovieValidation } = require('../util/validation');

router.get('/', getMovies);
router.post('/', celebrate(createMovieValidation), createMovie);
router.delete('/:movieId', celebrate(deleteMovieValidation), deleteMovie);

module.exports = router;
