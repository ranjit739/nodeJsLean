const mongoose=require("mongoose")

const connectedDB=async()=>{
    try {
       await  mongoose.connect(process.env.mongoDBUrl)
       console.log("database is connected")
    } catch (error) {
       console.log("error",error) 
    }
  
}

module.exports={connectedDB}