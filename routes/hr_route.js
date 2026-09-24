let express=require('express');
let router=express.Router();
let {users} =require('../models/users');
let {tasks}=require('../models/tasks')
router.get("/viewemployee",async(req,res)=>{
    let result=await users.find()
    res.send(result);
});
//  open whether postman or chrome for viewemployee
router.post("/assign-task",async(req,res)=>{
    let data=req.body;
    //  collecting input 
    let newTasK=new tasks(data);
    let result=await newTasK.save();
    res.send(result)
});

router.get("/viewtasks",(req,res)=>{
    res.send("view tasks route");
});

router.delete("/deleteEmp/:id",async(req,res)=>{
    let result=await users.findByIdAndDelete(req.params.id)
    if(result){
        res.send("employee deleted success");
    }else{
        res.send("no user found");

    }
});
// where "id" is created because to delete we need id
// localhost:3000/api/hr/deleteEmp/idweshould give
module.exports=router;
//  were router is going to run or export all get,post,delete
