let express=require("express")
const home = require("../controllers/home")
const passport=require("passport")
const redirectUrl = require("../controllers/protected")
const router=express.Router()
const googleStrategy=require("passport-google-oauth2").Strategy
const protected=require("../controllers/protected")
const logout = require("../controllers/logout")
const products = require("../controllers/products")
const sessionAuthentication = require("../middlewares/sessionauthentication")
const productDetails = require("../controllers/productDetails")

require("../middlewares/passport-setUp")

console.log(process.env.CLiNT_ID,process.env.CLIENT_SECRET,process.env.CALLBACK_URL)

const isLogin=(req,res,next)=>{
    console.log("middleware exicuter")
    req.user ? next() : res.redirect("/api/")
}

router.get("/",home)
router.get('/google',passport.authenticate("google",{scope:["profile" ,"Email"]}))
router.get("/google/callback",passport.authenticate("google",{ failureRedirect:"/faild"}),isLogin,protected)
router.get("/protected",isLogin,protected)
router.get("/products",isLogin,sessionAuthentication, products)
router.get("/productDetails",isLogin, sessionAuthentication,productDetails)
router.get("/logout",logout)

module.exports=router