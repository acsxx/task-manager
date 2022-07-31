const mongoose = require('mongoose');

const connectDatabase = () =>{

    mongoose.connect(process.env.MONGODB_CONN)
    .then(()=>{
        console.log("Mongodb Connnected!");
    })
    .catch((err)=>{
        console.error(err)
    })
}

module.exports = connectDatabase