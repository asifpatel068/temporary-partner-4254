const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const {UserModel}=require("../model/user.model")

const userRouter=express.Router()

userRouter.use(express.json())

userRouter.post("/register",async(req,res)=>{
    const {firstName,lastName,email,password}=req.body
    try{
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
                console.log(err)
            }else{
                const user=new UserModel({firstName,lastName,email,password:hash})
                await user.save()
                console.log(user)
                res.send("Registred")
            }
        })
    }catch(err){
        res.send("Error in Registred")
        console.log(err)
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user =await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    const token=jwt.sign({userID:user[0]._id},"masai")
                    res.send({msg:"Login Success","token":token})
                }else{
                    res.send("Wrong Credentials")
                }
            })
        }else{
            res.send("Wrong Credentials")
        }
    }catch(err){
        res.send("Error in login")
        console.log(err)
    }
})

module.exports={
    userRouter
}