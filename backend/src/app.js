import express from "express";
import cors from 'cors'

const app = express()
app.use(cors(
    {
        origin : process.env.CORS_URL,
        credentials:true
    }
))
app.use(express.json());

import userRouter from './routes/user.routes.js'
app.use('/api/users', userRouter);

app.get('/', (req, res, next)=>{
    console.log("\n Backend is running properly");
})
export default app;