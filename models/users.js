let mongoose=require('mongoose');
let userschema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:String
})
//  schema represents - table names
let users=mongoose.model('users',userschema);
module.exports={users}
