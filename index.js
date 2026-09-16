let express=require("express");
let app=express();
let hrroutes=require('./routes/hr_route');
app.use("/api/hr",hrroutes);
// localhost:3000/api/hr/viewtasks
// localhost:3000/api/hr/viewemployees
// run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000")
})