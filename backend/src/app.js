import express from "express";
import cors from 'cors'

const app = express()
app.use(cors(
    {
        origin :process.env.CORS_ORIGIN,
        credentials:true
    }
))
app.use(express.json());

import userRouter from "./routes/user.routes";
app.use('/api/users', userRouter);

app.get('/', ()=>{
    console.log("\n Backend is running properly");
})
export default app;