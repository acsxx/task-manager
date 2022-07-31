const express = require("express")
const app = express();
require("dotenv").config()
const routers = require("./routers")
const connectDatabase = require("./helpers/database/db-connect")

app.use(express.json());

//Mongodb Connection 
connectDatabase()

//Routers Middlewares
app.use("/api",routers)



app.listen(process.env.PORT, ()=>{
    console.log("server listening on port " + process.env.PORT);
})