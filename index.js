const express=require("express")
require("dotenv").config()
const passport=require("passport")
const session=require("express-session")
const ejs=require("ejs")
const router=require("./routers/userRouters")
const mongoStore=require("connect-mongo")
const store=mongoStore.create({mongoUrl:process.env.DB_URL,collectionName:"session"})
let app=express()
app.set("view engine","ejs")
app.use(session({ secret: 'your-secret-key',resave: false,saveUninitialized: false ,store:store,cookie:{expires:  120000}}));
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use("/api",router)
const dBconnection=require("./config/dBConnection")
dBconnection()

app.listen(process.env.PORT_NO,()=>{console.log("server is running")})
