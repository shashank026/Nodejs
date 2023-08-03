const express =require("express")
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({ extended: true }));
router.post("/",(req,res)=>{
    const data = req.body
    res.send(data)

    
})

module.exports=router
