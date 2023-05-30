let mongoose=require("mongoose")
let schema=new mongoose.Schema({
    userId:String,
    userEmail:String,
    
})
module.exports=mongoose.model("user",schema)