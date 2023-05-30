var mongoose=require("mongoose")
let dBConnection=()=>{
mongoose.connect(process.env.DB_URL).then(()=>{console.log("DataBase connected")}).catch(("NOt connectd"))
}
module.exports=dBConnection