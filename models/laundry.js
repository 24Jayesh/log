const mongoose = require('mongoose')

const laundrySchema =new mongoose.Schema({
        
        clotheType:{
            type:String,
            required:true,
        },
        wash:{
            type:Boolean,
           default:false,
        
        },
        iron:{
            type:Boolean,
            default:false,
        
        },
        washAndIron:{
            type:Boolean,
            default:true,
        
        },
        price:{
            // type:mongoose.Schema.Types.ObjectId,
            //   ref='Price',
            type:Number,
            required:true,
        },
        isPair:{
            type:Boolean,
            default:false,
        },
        quantity:{
            type:Number,
            required:true,
            default:1,
        }
    

})