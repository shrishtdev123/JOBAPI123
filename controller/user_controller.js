const user = require("../modal/user_model");



class Logic {
    Login = async (req, res) => {
        try {
           
             // get email and name from the body
             
            
             // now cheak the name and password which we use durnig login is same as the name and email which is present in the database 
             // if yes than login sucessfuly otherwise you have to register first than login 
               res.send("this is working")
               
            
           
        } 
        catch (error) 
        {
            console.error("Login Error:", error);
        }
    };

    FindAlluser=async(req,res)=>{


         const data=await user.find({});
         res.json({
              data
         })
    }

    Register = async (req, res) => {
        try {
           
             // first we have to cheack weather comming data is valide or not 

               const {name,email,phone,password}=req.body;

                 const userexist=await user.findOne({email:email})

                   if(userexist){
                      return res.json({
                          msg:"user already exists"
                      })
                   }

                    await user.create({name,email,phone,password});
                    res.json({
                         msg:"user created"
                    })
          
           
        } catch (error) {
            console.error("Registration Error:", error);
        }
    };
}

const obj = new Logic();
module.exports = obj;
