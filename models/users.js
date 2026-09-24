let mongoose=require('mongoose');
let userschema=mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
    role:{
        type:String,
        enum:["HR","EMPLOYEE"]
    }
    // ENUM : we can declare constant array values example: days in [    array]
})
//  schema represents - table names
let users=mongoose.model('users',userschema);
module.exports={users}