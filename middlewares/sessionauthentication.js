let sessionAuthentication=(req,res,next)=>{

        console.log("is authentocaticated",req.session.cookie._expires.toString().split(":")[1],req.session.cookie._expires)
        if(new Date().getMinutes()>req.session.cookie._expires.toString().split(":")[1]){
            req.logout((er)=>{
                er ? console.log(er)  : res.redirect("/api/")
            })
        }
            else{
                next()

            }
       
    }


    
    


module.exports=sessionAuthentication