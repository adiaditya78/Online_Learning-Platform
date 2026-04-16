import { Link } from 'react-router-dom';
import FeatureCard from './FeatureCard';
import { FaChartLine, FaUpload, FaListUl } from 'react-icons/fa';
export default function Home(){
    return(
        <div className="flex flex-col min-h-screen bg-slate-50">
            <section className="relative flex flex-col md:flex-row items-center justify-between px-6 py-16 md:px-16 lg:px-24 lg:py-24 bg-linear-to-b from-yellow-200 to-green-200 overflow-hidden">
                <div className="w-full z-10 flex flex-col gap-6">
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight'>
                        Unlock Your Potential with 
                        <span className='text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-green-500 ml-2'>Smart Learn</span>
                    </h1>
                    <p className='text-lg text-gray-600 md:pr-10'>Master new skills with interactive courses, track your daily progress, and join a community of learners pushing boundaries.</p>
                    <div className='flex gap-4 mt-4'>
                        <Link to="/signup" className='bg-linear-to-r from-yellow-500 to-green-500 text-white font-bold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transform transition-all hover:-translate-y-1 '>Start Learning Free</Link>
                        <Link to='/courses' className='px-8 py-3 bg-white border-2 border-gray-200 rounded-lg text-gray-700 font-bold hover:border-green-400 hover:text-green-600 transition-colors'>Explore Courese</Link>
                    </div>
                </div>
                <div className='w-full md:w-1/2 mt-12 md:mt-0 z-10 flex justify-center'>
                    <img src="/Coding.svg" className='w-full max-w-lg drop-shadow-2xl'/>
                </div>
            </section>
            <section className='py-20 px-6 md:px-16 lg:px-24 bg-white'>
                <div className='text-center mb-16'>
                    <h2 className='text-3xl font-bold text-gray-900'>Why Choose Smart Learn?</h2>
                    <p className='text-gray-500'>Everything you need to succeed in your educational journey.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    <FeatureCard icon={<FaChartLine className='text-2xl text-white'/>} title="Personalized Dashboard"
                    description="Get a tailored learning experience. Track your progress, maintain your streak, and visualize your growth all in one place."color="from-blue-400 to-blue-600" />
                    <FeatureCard icon={<FaUpload className='text-2xl text-white'/>} title="Upload Custom Material" description="Bring your own resources. Upload your custom courses, PDFs, or study materials to centralize your learning." color="from-yellow-400 to-orange-500"/>
                    <FeatureCard icon={<FaListUl className='text-2xl text-white'/>} title="Instant Quizzes" description="Test your knowledge instantly. Generate and take quick quizzes based on your learning materials to reinforce concepts." color="from-green-400 to-green-500"/>
                </div>
            </section>
        </div>



//             {/* 3. Call to Action (CTA) Section */}
//             <section className="py-20 px-6 bg-linear-to-br from-yellow-300 to-green-400 text-center flex flex-col items-center justify-center">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to start your first course?</h2>
//                 <p className="text-lg text-gray-800 mb-8 max-w-2xl">
//                     Join thousands of students who are already advancing their careers and building the future.
//                 </p>
//                 <Link to="/signup" className="px-10 py-4 bg-gray-900 text-white font-bold text-lg rounded-xl shadow-xl hover:bg-gray-800 transition-colors">
//                     Create Your Account Now
//                 </Link>
//             </section>

//         </div>
//     )
// }
    )
}