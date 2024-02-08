const multer = require('multer');


//sorage config 
const storage =multer.diskStorage({
    destination:(req,file,cb)=>{  //kha par store karna hai
    cb(null,"./uploads")
    },
    filename:(req,file,cb)=>{ //kis name se store karna hai 
        const filename= `image-${Date.now()}.${file.originalname}`;
        cb(null,filename)
    }    
});

//filter 
const filefilter=(req,file,cb)=>{
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg"){
        cb(null,true);
    }
    else{
       cb(null,false);
       return cb(new Error("Only .png .jpg & .jpeg Formate Allowed")) ;
    }

}


//uplod 
const upload = multer({
    storage:storage,
    filefilter:filefilter
});

module.exports = upload;