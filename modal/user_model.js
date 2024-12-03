const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
         name:{
             type:String,
             required:true
         },
         email:{
             type:String,
             required:true
         },
         phone:{
             type:Number,
             required:true
         },
         password:{
             type:Number,
             required:true
         },
         isAdmin:{
             type:Boolean,
             default:false
         }

})
// define the modal or Collection name ,means we are creating table in sql 
const user=new mongoose.model("user",userSchema);

module.exports=user;