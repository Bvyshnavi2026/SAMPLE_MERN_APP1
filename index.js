let express=require("express");
let app=express();
let hrroutes=require('./routes/hr_route');
let emproutes=require('./routes/emp_route');
app.use("/api/hr",hrroutes);
app.use("/api/employee",emproutes);
// localhost:3000/api/hr/viewtasks
// localhost:3000/api/hr/viewemployees
// run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000")
})