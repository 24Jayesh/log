const express =require("express");
const router =new express.Router();

//import controllers 
const userContrllers =require('../Constrollers/usercontrollers')


//import multer
const upload =require('../multerconfig/config')



//routers
router.post("/register",upload.single("user_profile"),userContrllers.addUser);
router.post("/login",userContrllers.loginuser);
router.get('/userdetails',userContrllers.userdetails);
router.get('/singleuserdetails',userContrllers.singleuserdetails);
router.put("/updateuser/:id",upload.single("user_profile"),userContrllers.updateUser);


module.exports =router;