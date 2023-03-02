const  mongoose = require('mongoose');
const ClasseSchema= new mongoose.Schema({
    className:{
        type:String,
        min:2,
        max:20,
      unique:true
    },
    teacherId:{
        type:String,
        min:2,
        max:20,
      unique:true
    },
},
{timestamps:true}
);
module.exports=mongoose.model("Classe",ClasseSchema);