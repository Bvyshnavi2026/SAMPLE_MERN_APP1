let express=require('express');
let router=express.Router();
let {users}=require('../models/users');
router.get("/viewtask",(req,res)=>{
    res.send("view task route");
});
router.post("/login",(req,res)=>{
    res.send("login  route");
});
router.post("/register",async(req,res)=>{
    //  whatever we enter in postman input data collecting
    console.log(req.body);
    let newuser=users(req.body);
    let result= await newuser.save();
    res.send(result);
});
router.put("/updatestatus",(req,res)=>{
    res.send("update status  route");
})
module.exports=router;