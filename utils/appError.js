class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.name = this.constructor.name;
    this.statusCode = statusCode || 500;
    this.isOperational = true;

    if (this.statusCode >= 400 && this.statusCode < 500) {
      this.status = 'fail';
    } else {
      this.status = 'error';
    }

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
