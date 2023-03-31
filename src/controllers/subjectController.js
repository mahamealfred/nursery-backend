const { model } = require("mongoose");
const { decode } = require("../helpers/jwtTokenizer");
const Subject=require("../models/Subject");
const Teacher=require("../models/Teacher");

class subjectController{
    static async addSubject(req, res) {
        const {subjectName,description,videoUrl,fileUrl}=req.body
        const token = req.headers["token"];
        const decodedToken = await decode(token);
        const teacherId=decodedToken.teacherId
   
        try {
            const checkTeacherId=await Teacher.findOne({telephone:teacherId});
            if(!checkTeacherId){
                return res.status(200).json({
                    statusCode: 400,
                    message: "The teacher with below phone number doesn't exist",
                  });  
            }
        
            else{
            
                const data= await Subject.create({
                    subjectName,
                    description,
                    videoUrl,
                    fileUrl,
                    teacherId,
                  
                  }); 
                  return res.status(200).json({
                    statusCode: 200,
                    status:"SUCCESS",
                    message: "Successfull created",
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
    static async getSubjects(req, res) {
        try {
                const data= await Subject.find(); 
                  return res.status(200).json({
                    statusCode: 200,
                    status:"SUCCESS",
                    data: data,
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
module.exports =subjectController