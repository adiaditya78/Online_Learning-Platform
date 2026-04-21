import { Course } from "../models/course.model.js";
import getVideoDetails from "../services/youtubeAPICall.js";


const extractVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

function parseDuration(durationStr) {
    if (!durationStr) return 0;
    const match = durationStr.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return 0;
    
    const hours = parseInt(match[1] || 0);
    const minutes = parseInt(match[2] || 0);
    const seconds = parseInt(match[3] || 0);
    return hours * 3600 + minutes * 60 + seconds;
}

const addCourse = async(req, res) =>{
    try {
        const {url} = req.body;
        const videoId = extractVideoId(url);
        if(!videoId) res.status(400).json({message : "Invalid YouTube URL"});
        const VideoDetails = await getVideoDetails(videoId);
        if(!VideoDetails || !VideoDetails.items || VideoDetails.items.length == 0){
            return res.status(404).json({message : "Video not found!"});
        }
        
        const videoData = VideoDetails.items[0];
        const title = videoData.snippet.title;
        const description = videoData.snippet.description;
        const thumbnailUrl = videoData.snippet.thumbnails?.url || videoData.snippet.thumbnails?.default?.url;
        const durationStr = videoData.contentDetails.duration;
        const totalDuration = parseDuration(durationStr);

        const newCourse = await Course.create(
            {
                title,
                description,
                videoId,
                thumbnailUrl,
                totalDuration
            }
        );
        res.status(201).json({message:"Course Added"});
    }
    catch (error) {
        return res.status(500).json({message : "Server Error"});     
    }
}

const getAllCourses = async(req, res)=>{
    try {
        const courses = await Course.find({});
        res.status(200).json({message : "Courses fetched", data : courses});
    } catch (error) {
        res.status(500).json({message : "Sever Error"});
    }
}

const getCourseById = async(req, res) =>{
    try{
        const {id} = req.params;
        const course = await Course.findById(id);
        if(!course) return res.status(404).json({message : "Course not found"});
        res.status(200).json({message : "Course Details", data : course});
    }
    catch(error){
        res.status(500).json({message : "Sever Error"});
    }
}

export { addCourse, getAllCourses, getCourseById };