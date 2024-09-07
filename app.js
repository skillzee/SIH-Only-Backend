const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const config = require("dotenv").config
const donorRouter = require("./Routes/donor.route.js")



const app = express();

module.exports = { app }


config({
    path: "Database/config.env"
})


app.use(express.json())
app.use(cookieParser())
app.use(express.static("public"))
app.use(cors({
    origin: process.env.FRONTEND_URI // Replace with your frontend domain
  }));
  


// Routes

app.use("/api/donor", donorRouter)




app.get("/", (req,res)=>{
    res.send("Server Working Properly")
})