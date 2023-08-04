const express = require("express")
const router = express.Router()
const fs= require("fs")
router.use(express.json())
router.use(express.urlencoded({ extended: true }));
router.post("/",(req,res)=>{
    console.log("login")

    
    

    
})

module.exports=router
