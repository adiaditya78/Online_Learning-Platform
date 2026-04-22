import mongoose from "mongoose";
import { User } from "./user.model.js";
import { Course } from "./course.model.js";

const enrollmentSchema = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        course:{
            type: mongoose.Schema.Types.ObjectId,
            ref : "Course",
            required : true
        },
        progressPercentage:{
            type : Number,
            default : 0,
            min : 0,
            max : 100
        },
        isCompleted:{
            type: Boolean,
            default : false
        },
        lastWatchedAt:{
            type: Date,
            default : Date.now
        }
    },
    {
        timestamps : true
    }
)

export const Enrollment = mongoose.model("Enrollment", enrollmentSchema);