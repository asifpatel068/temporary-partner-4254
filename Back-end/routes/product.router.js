const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const {ProductModel}=require("../model/product.model")

const productRouter=express.Router()

productRouter.use(express.json())

productRouter.get("/",async(req,res)=>{
    const searchQuery=req.query
    try{
        const product=await ProductModel.find(searchQuery)
        res.send(product)
    }catch(err){
        console.log(err)
        res.send("Error in geting product")
    }
})

productRouter.post("/add",async(req,res)=>{
    let data= req.body
    try{
        let product=ProductModel(data)
        await product.save()
        console.log(product)
        res.send("Product added Successfully")

    }catch(err){
        res.send("Err while adding product")
    }
})

productRouter.patch("/edit/:id",async(req,res)=>{
    let ID=req.params.id
    let data=req.body
    try{
        let product=await ProductModel.findByIdAndUpdate({_id:ID},data)
        console.log(product)
        res.send("Product updated")

    }catch(err){
        res.send("Err while updating product")
    }
})

productRouter.delete("/delete/:id",async(req,res)=>{
    let ID=req.params.id
    try{
        let product=await ProductModel.findByIdAndDelete({_id:ID})
        console.log("Product deleted")
        res.send("Product deleted")

    }catch(err){
        res.send("Err while deleting product")
    }
})


module.exports={
    productRouter
}