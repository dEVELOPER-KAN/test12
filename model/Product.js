const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    "title":{
        type:String,
        required:true
    },
    "slug":{
        type:String,
        get:(v)=>{
            return "hello";
        }
    },
    "description":{
        type:String,
        required:true
    },
    "variants":{
        type:String
    },
    "cover-image":{
        type:String,
       
    },
    "images":{
        type:String,
    
    },

});
const Product=new mongoose.Model('product',ProductSchema);

module.exports=Product;