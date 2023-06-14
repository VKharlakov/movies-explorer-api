const { Joi } = require('celebrate');
const { urlRegEx } = require('./constants');

const loginValidation = {
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      'string.email': 'Неправильная почта',
      'any.required': 'Поле "почта" должно быть заполнено',
    }),
    password: Joi.string().required().messages({
      'any.required': 'Поле "пароль" должно быть заполнено',
    }),
  }),
};

const createUserValidation = {
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      'string.email': 'Неправильная почта',
      'any.required': 'Поле "почта" должно быть заполнено',
    }),
    password: Joi.string().required().messages({
      'any.required': 'Поле "пароль" должно быть заполнено',
    }),
    name: Joi.string().min(2).max(30).required()
      .messages({
        'string.min': 'Поле "имя" должно быть больше 2 символов',
        'string.max': 'Поле "имя" должно быть меньше 30 символов',
        'any.required': 'Поле "имя" должно быть заполнено',
      }),
  }),
};

const updateUserValidation = {
  body: Joi.object({
    name: Joi.string().min(2).max(30).required()
      .messages({
        'string.min': 'Поле "имя" должно быть больше 2 символов',
        'string.max': 'Поле "имя" должно быть меньше 30 символов',
        'any.required': 'Поле "имя" должно быть заполнено',
      }),
    email: Joi.string().email().required().messages({
      'string.email': 'Неправильная почта',
    }),
  }),
};

const createMovieValidation = {
  body: Joi.object({
    country: Joi.string()
      .messages({
        'any.required': 'Поле "страна" должно быть заполнено',
      })
      .required(),
    director: Joi.string()
      .messages({
        'any.required': 'Поле "режиссер" должно быть заполнено',
      })
      .required(),
    duration: Joi.number()
      .messages({
        'any.required': 'Поле "продолжительность" должно быть заполнено',
      })
      .required(),
    year: Joi.string()
      .messages({
        'any.required': 'Поле "год" должно быть заполнено',
      })
      .required(),
    description: Joi.string()
      .messages({
        'any.required': 'Поле "описание" должно быть заполнено',
      })
      .required(),
    image: Joi.string()
      .regex(urlRegEx)
      .messages({
        'string.dataUri': 'Некорректная ссылка',
        'any.required': 'Поле "ссылка" должно быть заполнено',
      })
      .required(),
    trailerLink: Joi.string()
      .regex(urlRegEx)
      .messages({
        'string.dataUri': 'Некорректная ссылка',
      })
      .required(),
    thumbnail: Joi.string()
      .regex(urlRegEx)
      .messages({
        'string.dataUri': 'Некорректная ссылка',
      })
      .required(),
    nameRU: Joi.string()
      .messages({
        'any.required': 'Поле "название" должно быть заполнено',
      })
      .required(),
    nameEN: Joi.string()
      .messages({
        'any.required': 'Поле "навзвание" должно быть заполнено',
      })
      .required(),
    movieId: Joi.number()
      .messages({
        'any.required': 'Поле "id" должно быть заполнено',
      })
      .required(),
  }),
};

const deleteMovieValidation = {
  params: Joi.object({
    _id: Joi.string().hex().length(24).messages({
      'string.hex': 'Некорректный id',
    })
      .required(),
  }),
};

module.exports = {
  loginValidation,
  createUserValidation,
  updateUserValidation,
  createMovieValidation,
  deleteMovieValidation,
};
