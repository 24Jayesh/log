const {Schema,model} =require('mongoose')

const laundrySchema =new Schema({
        
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
const Model =  model('laundry',laundrySchema)

module.exports =Model;