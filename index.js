require("dotenv").config();
const express=require("express");
const app=express();
const cookiParser=require("cookie-parser")
const bodyParser=require("body-parser");
const databs = require("./db/database");

//import router
const router =require('./routes/router');



const PORT=process.env.PORT;  //5001


//middleware

app.use(express.json());
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.urlencoded({extended:false}));
 app.use("/uploads",express.static("./uploads"));
app.use(cookiParser());
app.use(router);

app.get('/', (req, res) => {
     res.send("hello everyone!");
 
  });
  


app.listen(PORT,()=>{
  
    console.log("listening on port ",PORT)
})