import connectDB from "./db/connectDB.js"
import express from 'express'
import dotenv from 'dotenv'

dotenv.config({path: "./.env"})

const app = express()
connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("Database Connection Failed");
})