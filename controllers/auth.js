const User = require("../Models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncError = require("express-async-handler");

const register = asyncError(async (req, res, next) => {
  const name = "Topcu";
  const email = "user1@example.com";
  const password = "1234";

  const user = await User.create({
    name,
    email,
    password,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
});

const error = (req, res, next) => {
  return next(new TypeError("Custom Error message", 400));
};

module.exports = {
  register,
  error,
};
