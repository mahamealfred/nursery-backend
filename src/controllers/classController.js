const { model } = require("mongoose");
const Classe=require("../models/Classe");
const Teacher=require("../models/Teacher");

class classController{
    static async addClass(req, res) {
        const {teacherId,className}=req.body
        try {
            const checkTeacher=await Teacher.findOne({telephone:teacherId});
            const checkClassName=await Classe.findOne({className:className});
            const checkTeacherId=await Classe.findOne({teacherId:teacherId});
            if(!checkTeacher){
                return res.status(200).json({
                    statusCode: 400,
                    message: "The teacher with below phone number doesn't exist",
                  });  
            }
            else if(checkClassName){
                return res.status(200).json({
                    statusCode: 400,
                    message: "The below class is already exist",
                  }); 
            }
            else if(checkTeacherId){
                return res.status(200).json({
                    statusCode: 400,
                    message: "The teacher has already assigned a classe",
                  }); 
            }
            else{
                const data= await Classe.create({
                    teacherId,
                    className
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
}
module.exports =classController