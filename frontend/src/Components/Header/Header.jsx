import {Link, NavLink} from 'react-router-dom'
import { FaBook, FaBars } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { useState } from 'react';
export default function Header(){
    const[show, setShow] = useState(false);
    return(
        <header className='bg-white sticky top-0 z-50'>
            <nav className='flex justify-between items-center h-16 px-4 border-b border-b-gray-300 gap-1'>
                <div className='flex items-center gap-1 lg:gap-2 h-10 '>
                    <div className='h-10 w-10 flex justify-center items-center bg-linear-to-br from-yellow-500 to-green-400 p-1 rounded-xl'>
                        <Link to='/'><FaBook className='h-5 w-5 text-white'/></Link>
                    </div>
                    <Link to='/'><h1 className='font-bold text-lg lg:text-2xl'>Smart Learn</h1></Link>
                </div>

                <div className='hidden md:flex items-center justify-center gap-3 lg:gap-5'>
                    <NavLink to='/dashboard' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} font-medium`}>Dashboard</NavLink>

                    <NavLink to='/courses' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} font-medium`}>Courses</NavLink>

                    <NavLink to='/about' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} font-medium`}>About</NavLink>

                    <NavLink to='/contact' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} font-medium`}>Contact</NavLink>

                </div>
                <div className='hidden md:flex lg:w-90'><input type="text" placeholder='Search Course' className='w-full h-9 border border-gray-300 rounded-lg bg-slate-100 px-3' /></div>     

                <div className='flex gap-4 h-10 justify-center lg:mr-5 lg:gap-6'>
                    <button className='flex justify-center items-center'><IoIosNotifications className='h-6 w-6' /></button>
                    <div className='flex justify-center items-center'>
                        <Link to='#'>
                            <img src="/user.png" alt="profile" className='h-8 w-8'/>
                        </Link>
                    </div>
                    <button className='md:hidden' onClick={()=>setShow(!show)}><FaBars className='h-5 w-5'/></button>
                </div>
            </nav>
            <div className={`${show ? "block":"hidden"} flex flex-col`}>
                <NavLink to='/dashboard' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} px-4 py-2 font-medium`}>Dashboard</NavLink>
                <NavLink to='/courses' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} px-4 py-2 font-medium`}>Categories</NavLink>
                <NavLink to='/about' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} px-4 py-2 font-medium`}>About</NavLink>
                <NavLink to='/contact' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} px-4 py-2 font-medium`}>Contact</NavLink>
                <div className='px-4 py-2'><input type="text" placeholder='Search Course' className='w-full h-9 border border-gray-300 rounded-lg bg-slate-100 px-3' /></div>
            </div>
        </header>
    )
}