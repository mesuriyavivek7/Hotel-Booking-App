import express from "express"
import dotenv from "dotenv"

//importing mongoose
import mongoose from "mongoose"

import cors from 'cors'

//importing routes
import authRoute from "./routes/auth.js"
import roomsRoute from "./routes/rooms.js"
import hotelRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"
import cookieParser from "cookie-parser"


const app=express()
dotenv.config()

//cors settings
const corsOptions={
    origin:(origin,callback)=>{
        const allowedOrigins=[
            "http://localhost:3000",
            "https://fuelflex.in",
            "https://www.fuelflex.in"
        ];
        const isAllowed = allowedOrigins.includes(origin);
        callback(null, isAllowed ? origin : false);
    },
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

//middleware for using cors
app.use(cors(corsOptions));

const connect=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongodb!")
    }catch(err){
        throw err
    }
}
mongoose.connection.on("disconnected",()=>{
   console.log("mongodb disconnected")
})
mongoose.connection.on("connected",()=>{
    console.log("mongodb connected")
})


app.get('/',(req,res)=>{
    res.send("Bahut maja ara hai bhai🐱")
})

//this middleware for authentication
app.use(cookieParser())
//using json middleware where we can easily get our json data
app.use(express.json())

//middleware 
app.use('/api/auth',authRoute)
app.use('/api/hotels',hotelRoute)
app.use('/api/rooms',roomsRoute)
app.use('/api/users',usersRoute)

//middleware for error handeling
app.use((err,req,res,next)=>{
    const errStatus=err.status || 500
    const errmsg=err.message || "Something went wrong"
    return res.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errmsg,
        stack:err.stack

    })
})


app.listen(8080,()=>{
    connect()
    console.log("connected on port:8080 to backend!")
})