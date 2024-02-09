
const newUser =require('../models/user');
const bcrypt =require('bcryptjs');
const nodemailer=require('nodemailer');




//nodemailer config 
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
}) 



//for user registration 
exports.addUser=async(req,res)=>{
    const file=req.file.filename;
    // console.log(file);
     const {fname,mobile,email,password,cpassword,address}=req.body;
     
      //checking validation
    if(!fname || !mobile || !email || !password || !cpassword){
        return res.status(400).json({status:"false",error:"All fields are required!"})
    }

    else{
         try{
            const preuser = await newUser.findOne({email:email})
           
            
            if(preuser){
                return res.status(400).json({status:"false",error:"This email is Already Exist!"})
            }else if(password !==cpassword){
               return res.status(400).json({status:"false",error:"Password and Confirm Password does not match"});
            }else{
                const finalUser =  new newUser({
                    fname,mobile,email,password,cpassword,address,user_image:file
                });

            //password hasing 
            const storeData =await finalUser.save();
            // console.log(storeData);
           res.status(201).json({status:"true",message:'User Added Successfully!'});
            }
            


            
         }catch(error){
             console.log("catch block error");
            return res.status(400).json({status:"false",error});
         }
    }

}


//login user
exports.loginuser =async(req,res)=>{
    const {email,password}=req.body;

    //check validation
    if(!email || !password){
        return  res.status(400).json({status:"false",error:"Please enter all fields!"})
    } 
    else{
        try{
            const userValid = await newUser.findOne({email:email})

            if(userValid){
                const isMatch = await bcrypt.compare(password,userValid.password);
                if(!isMatch){
                    res.status(400).json({status:"false",error:"Invalid Credentials"});
                }
                else{
                    //generating token 
                    const token =await userValid.generateAuthtoken();
                   // console.log(token);


                   res.cookie("usercookie",token,{
                    expires:new Date(Date.now()+9000000),
                    httpOnly:true
               });

                    // const result = {
                    //     userValid,
                    //     token
                    //  }
                    
                
                    res.status(200).json({status:"true",authToken:token});
                }
            }

        }
        catch(error){
            console.log("catch block error");
            return res.status(400).json({status:"false",error});
        }
    }

} 


exports.userdetails=async(req,res)=>{
    try{
        const userData=await newUser.find();
         console.log(userData);
        res.send(userData)
        // res.status(200).json(newsGetData);
  }catch(error){
      res.status(401).json({status:"false",error});
  }

}

exports.singleuserdetails=async(req,res)=>{
    const {email}=req.body; //change with id in future
    try{ 
        
        const singleuserData=await newUser.findOne({email:email});
         console.log(singleuserData);
        res.send(singleuserData)
        // res.status(200).json(newsGetData);
  }catch(error){
      res.status(401).json({status:"false",error});
  }

}

exports.updateUser=async(req,res)=>{
     const {id} = req.params;
     const {fname,mobile,address,user_profile}=req.body;

    
        try{ 
            const updateuser = await newUser.findByIdAndUpdate({_id:id},{
                fname,mobile,address,user_image:user_profile
        },{new:true})
       
    
            //password hasing 
        // console.log(updateuser," ji ")
            const ans =await updateuser.save();
            console.log(ans);
           res.status(201).json({status:"true",message:'User Added Successfully!'});
            
        
            
         }catch(error){
             console.log("catch block error");
            return res.status(400).json({status:"false",error});
         }
}



// //logout function 
exports.logoutuser =async(req,res)=>{
    try {
         
        res.clearCookie("usercookie",{path:"/login"});
        res.status(200).json({status:200})

    } catch (error) {
        res.status(400).json({status:400,error})
    }
}


///forgot password










