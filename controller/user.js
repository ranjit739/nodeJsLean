const User = require("../model/user")

const getUser=async(req,res,next)=>{
    console.log("hii")
const result= await User.find()
console.log(result)
res.status(200).json({data:result})
}


const createUser=async(req,res)=>{
const {name,email,city,age,password}=req.body

console.log(req.body)


const result =await User.create({name,email,city,age,password})


res.status(201).json({message:"user created",data:result})
}

module.exports={getUser,createUser}