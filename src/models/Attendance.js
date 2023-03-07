const  mongoose = require('mongoose');
const AttendanceSchema= new mongoose.Schema({
    studentId:{
        type:String,
        min:2,
        max:20,
     
    },
    date:{
        type:Date,
       
    },
    status:{
      type:String,
      min:2,

  },
},
{timestamps:true}
);
module.exports=mongoose.model("Attendance",AttendanceSchema);