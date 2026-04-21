import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express()
app.use(cors(
    {
        origin : "*",
        credentials:true
    }
))
app.use(express.json());
app.use(cookieParser());


import userRouter from "./routes/user.routes.js";
import courseRouter from "./routes/course.routes.js"
import enrollmentRouter from "./routes/enrollment.routes.js"

app.use('/api/users', userRouter);
app.use('/api/course', courseRouter);
app.use('/api/enrollments', enrollmentRouter);

app.get('/', ()=>{
    console.log("\n Backend is running properly");
})
export default app;