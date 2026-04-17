import express from "express";
import cors from 'cors'

const app = express()
app.use(cors(
    {
        origin :"*",
        credentials:true
    }
))
app.use(express.json());

import userRouter from './routes/user.routes.js'
app.use('/api/users', userRouter);

app.get('/', ()=>{
    console.log("\n Backend is running properly");
})
export default app;