import { HttpStatusCode } from 'axios';

class CustomPcoException extends Error {
  constructor(customErrorEntity, statusCode) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = customErrorEntity.resultMsg;
    this.data = {
      resultCode: customErrorEntity.resultCode,
      resultMsg: customErrorEntity.resultMsg,
      errorDetail: customErrorEntity.errorDetail,
    };
    this.status = statusCode;
  }
}

export class BadRequestPCOException extends CustomPcoException {
  constructor(customErrorEntity) {
    customErrorEntity.resultCode =
      customErrorEntity.resultCode || 'BAD_REQUEST';
    super(customErrorEntity, HttpStatusCode.BadRequest);
  }
}
export class UnAuthorizedPCOException extends CustomPcoException {
  constructor(customErrorEntity) {
    customErrorEntity.resultCode =
      customErrorEntity.resultCode || 'UNAUTHORIZED';
    super(customErrorEntity, HttpStatusCode.Unauthorized);
  }
}

export class ForbiddenPCOException extends CustomPcoException {
  constructor(customErrorEntity) {
    customErrorEntity.resultCode = customErrorEntity.resultCode || 'FORBIDDEN';
    super(customErrorEntity, HttpStatusCode.Forbidden);
  }
}

export class NotFoundPCOException extends CustomPcoException {
  constructor(customErrorEntity) {
    customErrorEntity.resultCode = customErrorEntity.resultCode || 'NOT_FOUND';
    super(customErrorEntity, HttpStatusCode.NotFound);
  }
}

export class InternalServerPCOException extends CustomPcoException {
  constructor(customErrorEntity) {
    customErrorEntity.resultCode = 'INTERNAL_SERVER_ERROR';
    customErrorEntity.resultMsg = 'Something is wrong. Please try again.';
    super(customErrorEntity, HttpStatusCode.InternalServerError);
  }
}

export const throwCustomPco = (error) => {
  if (error instanceof CustomPcoException) throw error;
  else throw getCustomPcoException(error);
};

export const getCustomPcoException = (error, errorDetails = null) => {
  if (error instanceof CustomPcoException) return error;

  const resultCode =
    errorDetails?.resultCode ||
    error?.resultCode ||
    error.response?.data?.resultCode ||
    error.code ||
    error?.name;
  const resultMsg =
    errorDetails?.resultMsg ||
    error?.resultMsg ||
    error.response?.data?.resultMsg ||
    error.response?.statusText ||
    error?.message;

  // build error from external exceptions
  const errorDetail = {
    request: {
      url: `${error?.response?.config?.baseURL || ''}${
        error?.config?.url || ''
      }`,
      method: error?.response?.config?.method,
      mainpart: error?.response?.config?.body || error?.response?.config?.data,
    },
    response: error?.response?.data || { resultCode, resultMsg },
    stackTrace: error.stack,
  };
  return new InternalServerPCOException({
    resultCode,
    resultMsg,
    errorDetail,
  });
};
