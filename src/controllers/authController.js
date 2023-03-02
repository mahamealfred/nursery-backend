const { model } = require("mongoose");
const User=require("../models/User");


class userController{
    static async signIn(req, res) {
     
    }
    static async signUp(req, res) {
      const {telephone,email,password}=req.body
      try {
         const checkTeacher=await User.findOne({teacherId:telephone});
         const checkParent=await User.findOne({parentId:telephone});
         const checkEmail=await  User.findOne({email:email})
         if(checkEmail){
             return res.status(200).json({
                 statusCode: 400,
                 message: "The below email is already exist",
               });  
         }
         else{
            let dataUser
             if(checkTeacher){
               dataUser = await User.updateOne(
                  {"teacherId":telephone},
                  {$set: { email:email,password:password}}); 

               return res.status(200).json({
                 statusCode: 200,
                 status:"SUCCESS",
                 message: "Account have been Successfull created",
                
               });
             }else if(checkParent){
               dataUser= await User.updateOne(
                  {"parentId":telephone},
                  {$set: { email:email,password:password}}); 
               return res.status(200).json({
                 statusCode: 200,
                 status:"SUCCESS",
                 message: "Account have been Successfull created",
           
               });
             }
             else{
               return res.status(200).json({
                  statusCode: 400,
                  message: "The Phone number bellow doesn't exist",
                });  
             }
              

         }
         
     } catch (error) {
         return res.status(500).json({
             statusCode: 500,
             status:"FAILED",
             message: error.message,
           });  
     }
     }

}
module.exports =userController