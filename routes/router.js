const express =require("express");
const router =new express.Router();

//import controllers 
const userControllers =require('../Constrollers/usercontrollers')


//import multer
const upload =require('../multerconfig/config')



//routers
router.post("/register",upload.single("user_profile"),userControllers.addUser);
router.post("/login",userControllers.loginuser);
router.get('/userdetails',userControllers.userdetails);
router.get('/singleuserdetails',userControllers.singleuserdetails);
router.put("/updateuser/:id",upload.single("user_profile"),userControllers.updateUser);
router.get("/logout",userControllers.logoutuser);


module.exports =router;