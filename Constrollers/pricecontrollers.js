const { response } = require('express');
const pricelist =require('../models/pricelist')


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

