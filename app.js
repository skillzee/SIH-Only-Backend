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

const corsOptions = {
    origin: 'https://sih-frontend-bg1yhi9ec-parth-sharmas-projects.vercel.app', // Your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };

app.use(express.json())
app.use(cookieParser())
app.use(express.static("public"))
app.use(cors(corsOptions))
  


// Routes

app.use("/api/donor", donorRouter)




app.get("/", (req,res)=>{
    res.send("Server Working Properly")
})