let productDetails=(req,res)=>{
    if(new Date().getMinutes()>req.session.cookie._expires.toString().split(":")[1]){
        req.logout((er)=>{
            er ? console.log(er)  : res.redirect("/api/")
        })}
        else{
          res.status(200).json({"message":"ok"})
        }
        
}
module.exports=productDetails