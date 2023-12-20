const mongoose = require("mongoose");
const demoSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    categorie:{
        type:String,
        require:true
    },
   image:{
        type:String,
        require:true
    }
})
const Demo = mongoose.model("Demo",demoSchema);
module.exports = Demo;
