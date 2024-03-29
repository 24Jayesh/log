require("dotenv").config();
const express=require("express");
const app=express();
const cookiParser=require("cookie-parser")
const bodyParser=require("body-parser");
const databs = require("./db/database");
const cors = require('cors');
//import router
const router =require('./routes/router');



const PORT=process.env.PORT;  //5001


app.use(express.json());
app.use(cors())
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.urlencoded({extended:false}));
app.use("/uploads",express.static("./uploads"));
app.use(cookiParser());
app.use(router);


app.use((req, res, next) => {
 res.setHeader("Access-Control-Allow-Origin", '*');
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Origin, Accept");
  next();
});




app.get('/', (req, res) => {
     res.send("hello everyone!");
 
  });
  


app.listen(PORT,()=>{
  
    console.log("listening on port ",PORT)
})