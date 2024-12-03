
const express=require("express");
const testroutes=require("./routes/testroutes");
const cors=require("cors");
const connectDB = require("./db/db");
const app=express();
app.use(cors());
app.use(express.json());
app.use(testroutes);

  // connectDB();
const port=process.env.PORT||4001
app.listen(port,()=>{
         connectDB();
      console.log(`server is running at port ${port}`);
      
})