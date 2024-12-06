const express=require("express")
const app=express()
const port=3000;
const router=require("./route/user");
const { connectedDB } = require("./connection");
require("dotenv").config()


app.use(express.json())

connectedDB()
app.use("/api/user",router)

app.listen(port,()=>{
    console.log("server is started",port)
})






