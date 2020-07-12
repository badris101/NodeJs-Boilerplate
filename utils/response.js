const errorCodes = {
  400: "Bad Request",
  1001: "user not found",
  500: "internal error",
};

function handleError(codeError) {
  if (errorCodes[codeError])
    return { code: codeError, message: errorCodes[codeError] };
  else return { code: codeError, message: errorCodes[codeError] };
}

function responseHandler(res, data, error, codeError, httpCode) {
  if (error)
    response = { success: false, data: null, ...handleError(codeError) };
  else response = { success: true, data };

  res.status(httpCode).json(response);
}

module.exports = {
  responseHandler,
};
