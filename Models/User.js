const mongoose = require("mongoose");
const  Schema  = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModel = new Schema({
  name: {
    type: String,
    required: [true, "Please enter a name!!"],
  },
  email: {
    type: String,
    required: [true, "Please enter a email!!"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address",
    ],
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin", "owner"],
  },
  password: {
    type: String,
    minlength: [6, "please enter a password with in min length 6 !!"],
    required: [true, "Please enter a password!!"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
  },
});

UserModel.methods.generateJwtFromUser = function(){

  const {JWT_KEY,JWT_EXPIRE} = process.env

  const payload = {
    id: this._id,
    name: this.name,
  }

  const token = jwt.sign(payload, JWT_KEY,{
    expiresIn: JWT_EXPIRE,
  })

  return token

}


UserModel.pre("save", function (next) {
  if (!this.isModified("password")) {
    next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) next(err);
      this.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", UserModel);
