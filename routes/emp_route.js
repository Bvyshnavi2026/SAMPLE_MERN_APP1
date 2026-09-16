let express=require('express');
let router=express.Router();
router.get("/viewtask",(req,res)=>{
    res.send("view task route");
});
router.post("/login",(req,res)=>{
    res.send("login  route");
});
router.post("/register",(req,res)=>{
    res.send("register route");
});
router.put("/updatestatus",(req,res)=>{
    res.send("update status  route");
})
module.exports=router;