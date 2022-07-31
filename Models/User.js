const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserModel = new Schema({
    name:{
        type: String,
        required: [true,"Please enter a name!!"]
    },
    email:{
        type: String,
        required: [true,"Please enter a email!!"],
        unique: [true,"Please enter a unique email address!!"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"]
    },
    role:{
        type: String,
        default: "user",
        enum: ["user", "admin", "owner",]
    },
    password:{
        type: String,
        minlength: [6,"please enter a password with in min length 6 !!"],
        required: [true,"Please enter a password!!"],
        select: false,
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
    }
});

module.exports = mongoose.model("User", UserModel)