
const {Schema,model, trusted} =require('mongoose');

const  OrderSchema =new Schema({
   
    //  email:{
    //     type:String,
    //     required:true,
    //     unique:true,
    //  },
    users:{
        type:Schema.Types.ObjectId,ref:'users',
    },
    // laundry:[{type:Schema.Types.ObjectId,ref:'laundry'}],
     
    //  order_data:{
    //     type:Array,
    //     required:true,
    //  },

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
    },

     pickupTime:{
        type:Date,
         default: Date.now(),
        
    },
    deliveryTime:{
        type:Date,
        default:()=>{
         const currentDate = new Date();
         currentDate.setDate(currentDate.getDate()+2);
         return currentDate;
        }
    },
    status:{
        type:String,
        enum:['order','pickup','on_way','delivered'],
        default:'ordered',
    },
    isOrdered:{
        type:Boolean,
        default:true,
    },
    isCancelled:{
        type:Boolean,
        default :false
    },
    isPickUp:{
        type:Boolean,
        default:true,
    },
    isDelivered:{
        type:Boolean,
        default:false,
    },
    // isConfirmed:{
    //      type:Boolean,
    //      default:true,
    // },
    totalAmount:{
        type:Number,
  
    }
   


})
const Model =  model('order',OrderSchema)

module.exports =Model;
