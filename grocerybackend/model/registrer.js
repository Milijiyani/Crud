const mongoose = require ("mongoose");
const registerSchema =new mongoose.Schema({
    firstname:{
        type:String, 
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    phoneno:{
        type:Number,
        require:true
    },
    address:{
        type:String, 
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    password:{
        type:String,
        require:true
    }
    
})
const Register = mongoose.model("Register",registerSchema);
module.exports =Register;