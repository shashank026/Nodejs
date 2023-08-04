const express = require("express")
const router = express.Router()
const userDetails=require("../user_details.json");
router.use(express.json())
router.use(express.urlencoded({ extended: true}));
router.post("/",(req,res)=>{
 try {
    const{username,password}=req.body;
    if(username && password)
    {
        for(let i=0;i<userDetails.length;i++)
        {
            if(userDetails[i].username===username && userDetails[i].password===password)
            {
                res.send("user already registered");
                return;
            }
        }
            userDetails.push({username,password});
            const fs=require(fs);
            fs.writeFileSync("../user.details.json",JSON.stringify(userDetails));
            res.send("user registered successfully");
            
        

    }
    else
    {
        res.status(400).send("username and password are required");


    }
 }
 catch (err)
 {
    res.status(500).send("internal server error");
 }
});
module.exports=router
