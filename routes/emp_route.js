let express=require('express');
let router=express.Router();
let bcrypt=require('bcrypt');
let {users}=require('../models/users');
router.get("/viewtask",(req,res)=>{
    res.send("view task route");
});
router.post("/login",async(req,res)=>{
    let result=await users.findOne({email:req.body.email})
    // result.password=undefined;
    if(result)
        {
        let matchpass=await bcrypt.compare(req.body.password,result.password);
        if(matchpass){
            res.send("Login Successfull");
        }else{
            res.send("Login failed");
        }
    }else{
            res.send("user not found");
        }
});

router.post("/register",async(req,res)=>{
    //  whatever we enter in postman input data collecting
    console.log(req.body);
    req.body.password=await bcrypt.hash(req.body.password,10);
    //  where hash will convert into encrypted form
    let newuser=users(req.body);
    let result= await newuser.save();
    res.send(result);
});
router.put("/updatestatus",(req,res)=>{
    res.send("update status  route");
});
router.patch("/updateprofile/:id",async(req,res)=>{
    let data=req.body;
    if(data.password){
        data.password=await bcrypt.hash(data.password,10);
    }
    let result=await users.findByIdAndUpdate(req.params.id,data,{new:true});
    res.send(result);
});
//  where patch is for partially updating
module.exports=router;