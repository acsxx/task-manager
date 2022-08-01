const User = require("../Models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncError = require("express-async-handler");
const {sendJwt} = require("../helpers/authorization/jwt-operations")

const register = asyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  sendJwt(user,res)

});


const getUser = (req,res,next) => {

  res.json({
    success: true,
    data:{
      id: req.user.id,
      name: req.user.name
    }
  })
}

module.exports = {
  register,
  getUser
};
