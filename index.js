let express=require("express");
let cors=require('cors');
let app=express();
let hrroutes=require('./routes/hr_route');
let emproutes=require('./routes/emp_route');
let mongoose=require('mongoose');

app.use(cors())
// here anyone anybody can access(app.use(cors()))
// mongodb+srv://bachireddyvyshnavi_db_user:4dHRprd6wAriIPPX@cluster0.bamdlob.mongodb.net/hrmanagement
let port=process.env.PORT || 3000;


mongoose.connect(process.env.monogo_url)
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
app.listen(port,"0.0.0.0",()=>{
    console.log("server listening on port 3000")
})