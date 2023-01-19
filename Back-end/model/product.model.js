const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
        title:String,
        brand:String,
        price:Number,
        category:String,  
        img:String
},{
    versionKey:false
})

const ProductModel=mongoose.model("product",productSchema)

module.exports={
    ProductModel
}