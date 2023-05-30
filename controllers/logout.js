let logout=(req,res)=>{
    req.logout((er)=>{
        er ? console.log(er) : res.redirect("/api/")
    })
    
}
module.exports=logout