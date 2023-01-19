const express=require("express")
const {connection}=require("./config/db")
const {userRouter}=require("./routes/user.router")
const {productRouter}=require("./routes/product.router")

var cors = require('cors')
const app=express()

app.use(cors())
app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/users",userRouter)
app.use("/products",productRouter)


app.listen(7575,async()=>{
    try{
        await connection
        console.log("Conneted to db")
    }catch(err){
        console.log("Not Connected to DB")
        console.log(err)
    }
    console.log("Connected to server")
})