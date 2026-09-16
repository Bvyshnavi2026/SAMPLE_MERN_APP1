let express=require('express');
let router=express.Router();
router.get("/viewemployee",(req,res)=>{
    res.send("view employee route");
});
router.post("/assign-task",(req,res)=>{
    res.send("assign task route");
});
router.get("/viewtasks",(req,res)=>{
    res.send("view tasks route");
});
router.delete("/deleteEmp",(req,res)=>{
    res.send("delete Emp route");
})
module.exports=router;
//  were router is going to run or export all get,post,delete