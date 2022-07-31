const CustomError = require("../../helpers/error/CustomError");

const errorHandler = (err, req, res, next) => {

  if (err.name === "SyntaxError") {
    err = new CustomError(err.message, 400);
  }
  if (err.name === "ValidationError") {
    err = new CustomError(err.message, 400);
  }

  //console.log(err.name + " = " + err.message, err.status);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Server Error !!!"
  });
};

module.exports = errorHandler;
