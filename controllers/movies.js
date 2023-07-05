const { ObjectId } = require('mongodb');
const Movie = require('../models/movie');
const {
  BAD_REQUEST_MESSAGE,
  CARD_NOT_FOUND_MESSAGE,
  STATUS_OK_CREATED,
  DELETION_NOT_AUTHORIZED_MESSAGE,
  STATUS_OK,
} = require('../util/constants');

const NotFoundError = require('../errors/NotFound');
const BadRequestError = require('../errors/BadRequest');
const ForbiddenError = require('../errors/Forbidden');

function getMovies(req, res, next) {
  const id = new ObjectId(req.user._id);
  Movie.find({ owner: id })
    .populate(['owner'])
    .then((movies) => res.send(movies))
    .catch(next);
}

function createMovie(req, res, next) {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  })
    .then((movie) => {
      res.status(STATUS_OK_CREATED).send(movie);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') next(new BadRequestError(BAD_REQUEST_MESSAGE));
      else next(err);
    });
}

function deleteMovie(req, res, next) {
  Movie.findOne({ _id: req.params._id })
    .orFail(() => {
      throw new NotFoundError(CARD_NOT_FOUND_MESSAGE);
    })
    .then((movie) => {
      if (req.user._id === movie.owner._id.toString()) {
        Movie.findByIdAndRemove(req.params._id)
          .then((movie2) => res.status(STATUS_OK).send(movie2));
      } else { throw new ForbiddenError(DELETION_NOT_AUTHORIZED_MESSAGE); }
    })
    .catch((err) => {
      if (err.name === 'CastError') next(new BadRequestError(BAD_REQUEST_MESSAGE));
      else next(err);
    });
}

module.exports = {
  getMovies,
  createMovie,
  deleteMovie,
};
