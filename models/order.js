
const {Schema,model} =require('mongoose');

const  OrderSchema =new Schema({
   
    //  email:{
    //     type:String,
    //     required:true,
    //     unique:true,
    //  },
    users:{
        type:Schema.Types.ObjectId,ref:'users',
    },
    laundry:[{type:Schema.Types.ObjectId,ref:'laundry'}],
     
    //  order_data:{
    //     type:Array,
    //     required:true,
    //  },
     pickupTime:{
        type:String,
        // default: Date.now(),
        
    },
    deliveryTime:{
        type:String,
    },
    status:{
        type:String,
        enum:['order','pickup','on_way','delivered'],
        default:'ordered',
    },
    isOrdered:{
        type:Boolean,
        default:false,
    },
    isCancelled:{
        type:Boolean,
        default :false
    }
   


})
const Model =  model('order',OrderSchema)

module.exports =Model;
