import { useState, useEffect } from 'react'
import {FaSearch} from 'react-icons/fa'
import api from '../../API/axios'

export default function Courses(){
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await api.get("/api/course/");
                
                setCourses(response.data.data || response.data); 
            } catch (error) {
                console.error("Error fetching courses:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    const filteredCourses = courses.filter(course => 
        course.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return(
        <div className='bg-slate-50 min-h-screen py-16 px-6 md:px-16 lg:px-24'>
            <div className='max-w-7xl mx-auto space-y-10'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Your Courses</h1>
                        <p className="text-gray-600 mt-2">Access all learning materials here.</p>
                    </div>
                    <div className='relative w-full md:w-80'>
                        <FaSearch className='absolute left-4 top-3.5 text-gray-400' />
                        <input type="text" className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400" placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                {loading ? (
                    <div className="text-center py-20 text-gray-500 font-medium">Loading courses...</div>) : 
                    (
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'> {filteredCourses.length > 0 ? (filteredCourses.map((course) => (
                            <div key={course._id || course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col">                                
                                <div className="h-48 w-full bg-gray-200">
                                    <img src={course.thumbnail || "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80"} alt={course.title}className="w-full h-full object-cover"/>
                                </div>
                                    
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2"> {course.title || "Untitled Course"}
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                                        {course.description || "No description available."}
                                    </p>
                                        
                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <a href={course.url || course.youtubeLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-linear-to-r from-yellow-500 to-green-500 text-white font-bold py-2 rounded-lg hover:shadow-md transition-shadow">Watch Video</a>
                                    </div>
                                </div>
                            </div>))) : 
                            (<div className="col-span-full py-20 text-center text-gray-500 font-medium">
                                No courses found. Head over to "Add Resource" to add your first YouTube link!
                            </div>)
                        
                        }</div>
                    )
                }
            </div>
        </div>
    )
}