import { NavLink, Outlet } from "react-router-dom"
import { FaBook } from "react-icons/fa"
export default function Auth(){
    return(
        <div className="flex h-screen w-screen">
            <div className="hidden md:flex flex-col gap-5 lg:gap-10 h-full flex-1 pl-12 pr-10 py-6 lg:py-10 bg-linear-to-br  from-yellow-300 to-green-400 overflow-hidden">

                <div className='flex items-center gap-2'>
                    <div className='h-12 w-12 flex justify-center items-center bg-linear-to-br from-yellow-500 to-green-400 p-1 rounded-xl'>
                        <FaBook className='h-6 w-6 text-white'/>
                    </div>
                    <h1 className='font-bold text-3xl text-gray-900'>Smart Learn</h1>
                </div>

                <div className="flex flex-col gap-2 ">
                    <h1 className="font-bold text-3xl leading-tight text-gray-900">Ready to Level Up Your Skills?
                        <br />
                        Welcome to Smart Learn!
                    </h1>
                    <p className="text-lg text-gray-700">Log in or create an account to start your learning journey today.</p>
                </div>

                <div className="w-full mt-auto flex justify-center">
                    <img src="/Coding.svg" className="w-[80%] max-w-md"/>
                </div>
            </div>
            <div className="flex-1 h-full flex flex-col justify-center items-center">
                <div className='md:hidden absolute top-4 lg:top-8 flex items-center gap-2 justify-center'>
                    <div className='h-12 w-12 flex justify-center items-center bg-linear-to-br from-yellow-500 to-green-400 p-1 rounded-xl'>
                        <FaBook className='h-6 w-6 text-white'/>
                    </div>
                    <h1 className='font-bold text-3xl text-gray-900'>Smart Learn</h1>
                </div>
                <div className="flex flex-col gap-3 w-3/4 lg:w-2/4 mt-20 md:mt-0">
                    <div className="flex justify-between items-center text-center gap-1">
                        <NavLink to="/login" className={({isActive})=>`${isActive ?'text-green-500 border-green-600':'text-gray-500 border-gray-600'} flex-1 py-3 text-xl font-medium border-b-2 transition-colors `}>Sign In</NavLink>
                        <NavLink to='/signup' className={({isActive})=>`${isActive ?'text-green-500 border-green-600' :'text-gray-500 border-gray-600'} flex-1 py-3 text-xl font-medium border-b-2 transition-colors`}>Sign Up</NavLink>
                    </div>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}