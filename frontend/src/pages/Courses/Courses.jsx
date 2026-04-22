import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'

export default function Courses(){
    const [loading, aetLoading] = useState();
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
                            // value={searchTerm}
                            // onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                {loading ? (
                    <div className="text-center py-20 text-gray-500 font-medium">Loading courses...</div>) : (<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                        
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                                <div key={course._id || course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex flex-col">
                    </div>
                }
            </div>
        </div>
    )
}