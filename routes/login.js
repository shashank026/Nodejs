const express = require("express")
const router = express.Router()
const userDetails=require('../user_details.json');
router.use(express.json())
router.use(express.urlencoded({ extended: true }));
router.post("/",(req,res)=>{
    try {
     const{username,password}=req.body;
     if(username && password)
     {
          for(let i=0;i<userDetails.length;i++)
          {
               if(userDetails[i].username==username && userDetails[i].password===password)
               {
                    res.send("User verified");
               }
               else if(userDetails[i].username===username && userDetails[i].password!==password)
               {
                    res.send("invalid credentials");
               }
          }
          res.send("user not found");
          }
          res.send("username and password is required");
     }
     catch(error)
     {
          res.status(500).send("Internal server error");
     }
    });
    
    

    

module.exports=router
