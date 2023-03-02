const  mongoose = require('mongoose');
const ParentSchema= new mongoose.Schema({
    fatherName:{
        type:String,
        min:2,
        max:20,
      //unique:false
    },
    motherName:{
        type:String,
        min:2,
        max:20,
      //unique:false
    },
    telephone:{
        type:Array,
        required:true,
        unique:true,
        default:[],

    }, 
},
{timestamps:true}
);
module.exports=mongoose.model("Parent",ParentSchema);