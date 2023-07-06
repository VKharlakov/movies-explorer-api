require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const { errors } = require('celebrate');

const router = require('./routes/index');
const { handleAllErrors, rateLimiter } = require('./util/utilities');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000, MONGODB_URI = 'mongodb://127.0.0.1/bitfilmsdb' } = process.env;

const app = express();

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Успешное подключение к MongoDB/bitfilmsdb'))
  .catch((err) => console.error('Ошибка подключения:', err));

const options = {
  origin: [
    'localhost:3000',
    'https://localhost:3000',
    'http://localhost:3000',
    'https://praktikum.tk',
    'http://praktikum.tk',
    'http://bitfilms.kharlakov.api.nomoredomains.rocks',
    'https://bitfilms.kharlakov.api.nomoredomains.rocks',
    'https://bitfilms.kharlakov.nomoreparties.sbs',
    'http://bitfilms.kharlakov.nomoreparties.sbs',
  ],
  credentials: true,
};

app.use('*', cors(options));
app.use(requestLogger);
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(rateLimiter);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(handleAllErrors);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
