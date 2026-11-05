let express=require("express");
let cors=require('cors');
let app=express();
let hrroutes=require('./routes/hr_route');
let emproutes=require('./routes/emp_route');
let mongoose=require('mongoose');

app.use(cors())
// here anyone anybody can access(app.use(cors()))


mongoose.connect("mongodb+srv://bachireddyvyshnavi_db_user:4dHRprd6wAriIPPX@cluster0.bamdlob.mongodb.net//hrmanagement")
.then(()=>{
    console.log("connected with mongodb database")
}).catch((err)=>{
    console.log(err);
})
app.use(express.json());
// used for collecting input from json data 
app.use("/api/hr",hrroutes);
app.use("/api/emp",emproutes);
// https://sample-mern-app1.onrender.com/api/hr/viewtasks
// https://sample-mern-app1.onrender.com/api/hr/viewemployees
// run the server     
app.listen(3000,()=>{
    console.log("server listening on port 3000")
})