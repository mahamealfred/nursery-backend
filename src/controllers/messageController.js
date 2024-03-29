const { model } = require("mongoose");
const Message=require("../models/Message");
const Teacher=require("../models/Teacher");
const Parent=require("../models/Parent");
const { decode } = require("../helpers/jwtTokenizer");

class classController{
    static async addMessage(req, res) {
        const {teacherId,message,parentId}=req.body
        try {
            const checkTeacher=await Teacher.findOne({telephone:teacherId});
            const checkParent=await Parent.findOne({telephone:parentId});
        
            if(!checkTeacher){
                return res.status(200).json({
                    statusCode: 400,
                    message: "The Teacher phone number doesn't exist",
                  });  
            }
            else if(!checkParent){
                return res.status(200).json({
                    statusCode: 400,
                    message: "The Parent phone number doesn't exist",
                  });  
            }
            else{
                const data= await Message.create({
                 message,
                 teacherId,
                 parentId
                  }); 
                  return res.status(200).json({
                    statusCode: 200,
                    status:"SUCCESS",
                    message: "Message Sent",
                    data: data,
                  });
            }
            
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                status:"FAILED",
                message: error.message,
              });  
        }
   
    }
    static async getMessages(req, res) {
      const token = req.headers["token"];
      const decodedToken = await decode(token);
      const teacherId=decodedToken.teacherId
        try {
                const data= await Message.find({teacherId:teacherId}); 
                if(data){
                  return res.status(200).json({
                    statusCode: 200,
                    status:"SUCCESS",
                    data: data,
                  });
                }
                return res.status(200).json({
                  statusCode: 404,
                  status:"FAILED",
                  message:"No data found",
                });
        
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                status:"FAILED",
                message: error.message,
              });  
        }
   
    }


}
module.exports =classController