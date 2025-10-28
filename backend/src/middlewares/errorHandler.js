function errorHandler(err, req, res, next) {
  console.error(err);
  if (res.headersSent) {
    return next(err);
  }
  const status = err.status || 500;
  const message = err.message || 'Server error';
  res.status(status).json({ msg: message });
}

module.exports = errorHandler;
