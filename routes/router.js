const express =require("express");
const router =new express.Router();

//import controllers 
const userControllers =require('../Constrollers/usercontrollers')
const priceControllers =require('../Constrollers/pricecontrollers')
const ordercontroller =require('../Constrollers/ordercontroller')
const paymenttestController =require('../Constrollers/paymentcontroller')

//import multer
const upload =require('../multerconfig/config')



//routers
router.post("/register",userControllers.addUser);
router.post("/login",userControllers.loginuser);
router.get('/userdetails',userControllers.userdetails);
router.get('/singleuserdetails',userControllers.singleuserdetails);
router.put("/updateuser/:id",upload.single("user_profile"),userControllers.updateUser);
router.get("/logout",userControllers.logoutuser);

router.post("/sendpasswordlink",userControllers.resetPasswordEmailLink);
router.get("/forgotpassword/:id/:token",userControllers.userValid);
router.post("/:id/:token",userControllers.updatepassword);


//price list routers,
router.post("/price",priceControllers.insertprice);
router.put("/priceupdate/:id",priceControllers.updateprice);
router.delete("/pricedelete/:id",priceControllers.deleteprice)

router.get("/pricelistdetails",priceControllers.getPriceList)


//orders
router.put("/neworder/:id",ordercontroller.orderdata)

//payments
// router.post("/payment-create",paymenttestController.paymentcreate)
// router.post("/payment-confirm",paymenttestController.paymentconfirm)
// router.post("/create-payment-intent",paymenttestController.paymentintent)

router.post("/checkout",paymenttestController.pay)
module.exports =router;