import express from "express";
import cors from 'cors'

const app = express()
app.use(cors(
    {
        origin : "*",
        credentials:true
    }
))
app.use(express.json());


import userRouter from "./routes/user.routes.js";
import courseRouter from "./routes/course.routes.js"


app.use('/api/users', userRouter);
app.use('/api/course', courseRouter)

app.get('/', ()=>{
    console.log("\n Backend is running properly");
})
export default app;