const { response } = require('express');
const pricelist =require('../models/pricelist')


//insert the price 
exports.insertprice =async(req,res)=>{
   const {clotheType,isPair,services}=req.body;

       //checking validation
       if(!clotheType || !services ){
        return res.status(400).json({status:"false",error:"All fields are required!"})
    }
     
    try{
   const exsistingprice =await pricelist.findOne({clotheType,services})
   if(exsistingprice){
    return res.status(400).json({status:"false",error:"already exist"})
   }
   else{
    const newPrice = new pricelist({
        clotheType,isPair,services   
    })
    const data =newPrice.save();
    res.status(200).json({status:"true",message:"price added successfully"})
   }
       
          
         

      
    }catch(err){
        return res.status(400).json({status:"false",error:err.message})
    }
 

}



exports.getPriceList =async(req,res)=>{
         try{
             const getpricelist = await  pricelist.find();
             console.log(getpricelist);
             return  res.status(200).json({status:"true",message:getpricelist})

         }catch(err){
              console.log("catch block of getPriceList")
              return res.status(400).json({status:"false",message:err.message})

         }



}


//update th price 
exports.updateprice= async (req ,res) =>{
    const {id}=req.params;
    console.log(id)
    const {clotheType,isPair,services}=req.body;

    //validation
    try{

       const updatePriceList = await  pricelist.findByIdAndUpdate({_id:id},{
                         clotheType,isPair,services
       },{new:true});


       const result = await updatePriceList.save();
       console.log(result);
       res.status(200).json({status:'true',message:"price list is updateded"});

    }catch(error){
        return res.status(400).json({status:"false",error});
    }

}


// delete pricelist 
exports.deleteprice = async(req,res)=>{
    const {id}=req.params;

    try{
         const deletePriceList = await pricelist.findByIdAndDelete({_id:id});
         res.status(200).json({status:"true",message:"pricelist is deleted"});
    }
    catch(error){
        return  res.status(400).json({status:"false",error})
    }


}