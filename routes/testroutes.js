const express=require("express");
const obj = require("../controller/user_controller");
const router=express.Router();
// here we define the number of  routes as per our requirement 
// using router and keep in mind please dont forggot to exports otherwise we will get error during the use 
router.get("/login",obj.Login)
router.post("/register",obj.Register)
router.get("/getuser",obj.FindAlluser)


module.exports=router