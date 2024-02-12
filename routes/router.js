const express =require("express");
const router =new express.Router();

//import controllers 
const userControllers =require('../Constrollers/usercontrollers')
const priceControllers =require('../Constrollers/pricecontrollers')

//import multer
const upload =require('../multerconfig/config')



//routers
router.post("/register",upload.single("user_profile"),userControllers.addUser);
router.post("/login",userControllers.loginuser);
router.get('/userdetails',userControllers.userdetails);
router.get('/singleuserdetails',userControllers.singleuserdetails);
router.put("/updateuser/:id",upload.single("user_profile"),userControllers.updateUser);
router.get("/logout",userControllers.logoutuser);

router.post("/sendpasswordlink",userControllers.resetPasswordEmailLink);
router.get("/forgotpassword/:id/:token",userControllers.userValid);
router.post("/:id/:token",userControllers.updatepassword);


//price list routers,
router.post("/price",priceControllers.insertprice)

module.exports =router;