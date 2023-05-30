let products=(req,res)=>{
    res.status(200).json({"status":"ok","message":req.session})
}
module.exports=products