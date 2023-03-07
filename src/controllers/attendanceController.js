
const { decode } = require("../helpers/jwtTokenizer");
const Attendance=require("../models/Attendance");
const Student=require("../models/Student");
const Classe=require("../models/Classe");

class attendanceController{
    static async addAttendance(req, res) {
        const {studentId,status,date}=req.body
        try {
            const chechStudent=await Student.findOne({regNumber:studentId});
            if(!chechStudent){
                return res.status(200).json({
                    statusCode: 400,
                    message: "The student bellow doesn't exist",
                  });  
            }
            else{
                const data= await Attendance.create({
                    studentId,
                    status,
                    date
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
    static async getAttendanceList(req, res) {
        const token = req.headers["token"];
        const Token = await decode(token);
       
        const teacherId=Token.teacherId
        const findClass=await Classe.findOne({teacherId:teacherId})
        const classId=findClass._id
        const students=await Student.find({classId:classId})
        let stdId
        students.map((p)=>{
           stdId= p.regNumber
        })  
        try {
                const data= await Attendance.find({studentId:stdId}); 
               //const data= await Attendance.find(); 
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
module.exports =attendanceController