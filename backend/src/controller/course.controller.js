import { Course } from "../models/course.model.js";
import getVideoDetails from "../services/youtubeAPICall.js";
const addCourse = async(req, res) =>{
    try {
        const {url} = req.body;
        const extractVideoId = (url) => {
            const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/;
            const match = url.match(regex);
            return match ? match[1] : null;
        };
        const VideoDetails = await getVideoDetails(extractVideoId(url));
        res.status(200).json({message : "Details Fetched", data : VideoDetails});
    } catch (error) {
        return res.status(500).json({message : "Server Error"});
        
        
    }
}
export default addCourse