const Product=require('../model/Product')

exports.retrieve=async (Request,Response,next)=>{
const products=await Product.find();
Response.status(200).json({
    "message":"success",
    "data":products
})
next();
}

exports.save=async (Request,Response,next)=>{
    const product=await new Product({

    });
    const data=product.save();
    Response.status(200).json({
        "message":"success",
        "data":data
    })
    next(); 
}

exports.delete=async (Request,Response,next)=>{
    const products=await Product.findOneAndDelete()
    Response.status(200).json({
        "message":"success",
        "data":products
    })
    next();
}

exports.update=async (Request,Response,next)=>{
    const products=await Product.
    Response.status(200).json({
        "message":"success",
        "data":products
    })
    next();
}