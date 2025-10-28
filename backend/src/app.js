const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const errorHandler = require('./middlewares/errorHandler');
const corsOptions = require('./utils/corsOptions');

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
});
app.use('/api/', limiter);

app.use('/api/auth', require('./routes/auth'));
app.use('/api/transactions', require('./routes/transactions'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/analytics', require('./routes/analytics'));

app.use(errorHandler);

module.exports = app;

