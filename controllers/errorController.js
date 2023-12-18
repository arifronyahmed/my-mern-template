module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorResponse = {
    status: 'error',
    message: err.message,
    stack: err.stack,
  };
  res.status(statusCode).json(errorResponse);
};
