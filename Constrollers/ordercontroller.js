const User =require('../models/user');
// const  laundry = require('../models/laundry');
const  order = require('../models/order');
const pricelist = require('../models/pricelist');
const user = require('../models/user');
exports.orderdata=async(req,res)=>{
    const {wash,iron,washAndIron,ispair ,quantity,clothetype,totalAmount} =req.body;
    const {id} = req.params
    try{
        const newOrder = new order({
            wash,iron,washAndIron,ispair ,quantity,clothetype,totalAmount  
        })
         console.log(newOrder);
        const  userdata = await user.findByIdAndUpdate({_id:id},
            {$push: {orders: newOrder}}  
        ,{new:true})
         const result =await userdata.save();
         console.log("result ",result);
         res.status(200).json({status:"true",message:"successfully add order"})

    }catch(errors){
        res.status(400).json({status:"false",message:errors.message});
    }

}





// exports.priceform = async(req,res)=>{
//           const {wash,iron,washAndIron,ispair ,quantity,clothetype} =req.body;
//         try{
//             const getpricelist = await  pricelist.findOne({clothetype:clothetype,ispair:ispair });
//             console.log(getpricelist);
//             res.status(200).json({status:"true",message:getpricelist})
//            let totalAmount =0;
             
//             // getpricelist.map(item=>{
//             //   if(item.services['wash'])    
//             // })
//               let price;

//             getpricelist.services.map(item =>{
//              if(item ==='wash'&& wash){
//                    price =item
//              }
//              else if(item==='iron'&&iron){

//              }
//              else if(item==='washAndIron'&&washAndIron){

//              }
//             })



//         }catch(err){}




// }