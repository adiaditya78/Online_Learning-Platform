import { Video } from "../models/video.model.js";
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

const addVideo = async(req, res) =>{
    try {
        const {url} = req.body;
        const videoId = extractVideoId(url);
        if(!videoId) res.status(400).json({message : "Invalid YouTube URL"});
        const VideoDetails = await getVideoDetails(videoId);
        if(!VideoDetails || !VideoDetails.items || VideoDetails.items.length == 0){
            return res.status(404).json({message : "Video not found!"});
        }
        console.log(VideoDetails);
        
        const videoData = VideoDetails.items[0];
        const title = videoData.snippet.title;
        const description = videoData.snippet.description;
        const thumbnailUrl = videoData.snippet.thumbnails?.url || videoData.snippet.thumbnails?.high?.url;
        const durationStr = videoData.contentDetails.duration;
        const totalDuration = parseDuration(durationStr);

        const newVideo = await Video.create(
            {
                title,
                description,
                videoId,
                thumbnailUrl,
                totalDuration
            }
        );
        res.status(201).json({message:"Video Added Successfully"});
    }
    catch (error) {
        return res.status(500).json({message : "Server Error"});  
    }
}

const getAllVideos = async(req, res)=>{
    try {
        const videos = await Video.find({});
        res.status(200).json({message : "Video fetched", data : videos});
    } catch (error) {
        res.status(500).json({message : "Sever Error"});
    }
}

const getVideoById = async(req, res) =>{
    try{
        const {id} = req.params;
        const video = await Video.findById(id);
        if(!video) return res.status(404).json({message : "Video not found"});
        res.status(200).json({message : "Video Details", data : video});
    }
    catch(error){
        res.status(500).json({message : "Sever Error"});
    }
}

const deleteVideoById = async (req, res) =>{
    try {
        const {id} = req.params;
        const deleted = await Video.findByIdAndDelete(id);
        res.status(200).json({message : "Video Successfully Deleted!"});
    } catch (error) {
        res.status(500).json({message : "Server Error!"})
    }
}

export { addVideo, getAllVideos, getVideoById, deleteVideoById };