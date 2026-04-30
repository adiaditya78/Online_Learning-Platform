import { useState, useEffect } from 'react'
import {FaSearch} from 'react-icons/fa'

import api from '../../API/axios'
import toast from 'react-hot-toast';
export default function Library(){
    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [videoId, setVideoId] = useState('');
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const handleDeleteVideo = async(videoId)=>{
        try {
            const response = await api.delete(`/api/videos/${videoId}`)
            toast.success(response.data.message);
            setRefreshTrigger(prev => prev + 1);
            setDeleteConfirmation(false);
        } catch (error) {
            toast.error(response.data.message);
        }
    }

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await api.get("/api/videos/");
                
                setVideos(response.data.data || response.data); 
                
            } catch (error) {
                console.error("Error fetching videos:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchVideos();
    }, [refreshTrigger]);

    const filteredVideos = videos.filter(video => 
        video.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return(
        <div className='bg-slate-50 min-h-screen py-16 px-6 md:px-16 lg:px-24'>
            <div className='max-w-7xl mx-auto space-y-10'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Your Videos</h1>
                        <p className="text-gray-600 mt-2">Access all learning materials here.</p>
                    </div>
                    <div className='relative w-full md:w-80'>
                        <FaSearch className='absolute left-4 top-3.5 text-gray-400' />
                        <input type="text" className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400" placeholder="Search videos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                {loading ? (
                    <div className="text-center py-20 text-gray-500 font-medium">Loading videos...</div>) : 
                    (
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'> {filteredVideos.length > 0 ? (filteredVideos.map((video) => (
                            <div key={video._id || video.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col">                                
                                <div className="h-48 w-full bg-gray-200">
                                    <img src={video.thumbnailUrl || "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80"} alt={video.title}className="w-full h-full object-cover"/>
                                </div>
                                    
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2"> {video.title || "Untitled Course"}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                                        {video.description || "No description available."}
                                    </p>
                                        
                                    <div className='flex items-center justify-around gap-2'>
                                        <div className='flex-1 bg-linear-to-r to-red-500 from-yellow-500 rounded-lg text-center hover:scale-103'>
                                            <button onClick={()=>{setDeleteConfirmation(true); setVideoId(video._id);}} className='py-2 font-bold text-white cursor-pointer hover:shadow-xl transition-shadow'>Delete Video</button>
                                        </div>
                                        <div className="mt-auto border-t border-gray-100 flex-1 cursor-pointer">
                                            <a href={video.url || video.youtubeLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-linear-to-r from-yellow-500 to-green-500 text-white font-bold py-2 rounded-lg hover:shadow-xl hover:scale-103 transition-shadow">Watch Video</a>
                                        </div>
                                    </div>
                                </div>
                            </div>))) : 
                            (<div className="col-span-full py-20 text-center text-gray-500 font-medium">
                                No videos found. Head over to "Add Resource" to add your first YouTube link!
                            </div>)
                        
                        }</div>
                    )
                }
            </div>
            {  deleteConfirmation && 
                <div className='fixed top-0 left-0 w-full h-full bg-gray-100/90'>
                    <div className='fixed top-2/4 left-2/4 w-3/4 md:w-2/5 bg-white transform -translate-2/4 rounded-lg p-5 md:p-8 flex flex-col items-center justify-around gap-5 lg:gap-10'>
                        <h1 className='text-2xl md:text-3xl'>Are you sure?</h1>
                        <div className='flex w-full gap-5'>
                            <button className='flex-1 bg-red-500 p-2 rounded-lg hover:bg-red-600 hover:shadow-xl' onClick={()=>setDeleteConfirmation(false)}>No</button>
                            <button className='flex-1 bg-green-500 p-2 rounded-lg hover:bg-green-600 hover:shadow-xl' onClick={()=>handleDeleteVideo(videoId)}>Yes</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}