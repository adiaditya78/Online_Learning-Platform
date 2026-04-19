import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        title :{
            type: String,
            required : true,
            trim : true
        },
        description : {
            type : String,
            required : true
        },
        videoId :{
            type : String,
            required : true,
        },
        thumbnailUrl:{
            type : String,
            required : true
        },
        totalDuration :{
            type: Number,
        }
    },
    {
        timestamps: true
    }
)

export const Course = mongoose.model("Course", courseSchema);