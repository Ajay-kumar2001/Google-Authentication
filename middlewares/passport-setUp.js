const passport=require("passport")
var userdata=require("../model/users")
const googleStrategy=require("passport-google-oauth2").Strategy
passport.use(new googleStrategy({

    clientID:process.env.CLiNT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL:process.env.CALLBACK_URL,
      passReqToCallback:true

},
function(request,accessToken,refreshToken,profile,done){
    console.log("form the passport",profile.id,"email",profile.email)
    if(profile.id && profile.email){
        let user=new userdata({"userId":profile.id,"userEmail":profile.email})
        user.save()
    }
    return done(null,profile)
}))
passport.serializeUser(function(user,done){
    return done(null,user)
})
passport.deserializeUser(function(user,done){
    return done(null,user)

})
