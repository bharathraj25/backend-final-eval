class InvalidInputError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidInputError';
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
  }
}

class RequiredKeyError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RequiredKeyError';
  }
}

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
  }
}


module.exports = {
  InvalidInputError,
  NotFoundError,
  RequiredKeyError,
  HttpError
};