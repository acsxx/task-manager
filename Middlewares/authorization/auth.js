const CustomError = require("../../helpers/error/CustomError");
const jwt = require("jsonwebtoken");
const {
  checkToken,
  getToken,
} = require("../../helpers/authorization/jwt-operations");

const checkAccess = (req, res, next) => {
  const { JWT_KEY } = process.env;

  if (!checkToken(req)) {
    return next(new CustomError("Access denied", 401));
  }

  const access_token = getToken(req);

  jwt.verify(access_token, JWT_KEY, (err, decoded) => {
    if (err) {
      return next(new CustomError("Access denied", 401));
    }

    req.user = {
      id: decoded.id,
      name: decoded.name,
    };
    
    next();
  });
};

module.exports = checkAccess;
