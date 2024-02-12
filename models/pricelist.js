const {Schema,model} =require('mongoose')
const pricelistSchema = new Schema({
            clotheType :{
                type:String,
                required:true,
            },
         isPair :{
            type:Boolean,
            default:false,
        
         },
         services:{
            wash:{
                type:Number,
                required:true,
            },
            iron:{
               type:Number,
               required:true,
            },
            washAndIron:{
               type:Number,
               required:true,
            },
            dryClean:{
               type:Number,
               required:true,
            }
            
         }

})

const Model =  model('pricelist',pricelistSchema )

module.exports =Model;