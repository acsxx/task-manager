const express = require("express")
const app = express();
require("dotenv").config()
const routers = require("./routers")
const connectDatabase = require("./helpers/database/db-connect")
const errorHandler = require("./middlewares/errors/error-handler")
app.use(express.json());


//Mongodb Connection 
connectDatabase()

//Routers Middlewares
app.use("/api",routers)

//Error Handler
app.use(errorHandler)

app.listen(process.env.PORT, ()=>{
    console.log("server listening on port " + process.env.PORT);
})