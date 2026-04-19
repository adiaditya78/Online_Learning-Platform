const video_http = "https://www.googleapis.com/youtube/v3/videos?";

const getVideoDetails = async(videoId)=>{
    try {
        const url_generator = new URLSearchParams(
            {
                key : process.env.YOUTUBE_API_KEY,
                part : "snippet,contentDetails",
                id : videoId
            }
        );
        const response = await fetch(video_http + url_generator);
        const data = await response.json();
        return data
    } catch (error) {
        console.log("Error", error);
        return null;
    }
}
export default getVideoDetails;