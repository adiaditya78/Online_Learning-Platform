import {Link, NavLink} from 'react-router-dom'
import { FaBook, FaBars } from "react-icons/fa";
import { useState } from 'react';
export default function Header(){
    const [logoutButton, setlogoutButton] = useState(false);
    const[renderNav, setRenderNav] = useState(false);
    const handleLogout = ()=>{
        window.location.href = "/login";
        localStorage.removeItem("accessToken");
    }

    return(
        <header className='bg-white sticky top-0 z-50'>
            <nav className='flex justify-between items-center h-16 px-4 border-b border-b-gray-300 gap-1'>
                <div className='flex items-center gap-1 lg:gap-2 h-10 '>
                    <div className='h-10 w-10 flex justify-center items-center bg-linear-to-br from-yellow-500 to-green-400 p-1 rounded-xl'>
                        <Link to='/'><FaBook className='h-5 w-5 text-white'/></Link>
                    </div>
                    <Link to='/'><h1 className='font-bold text-lg lg:text-2xl'>Smart Learn</h1></Link>
                </div>

                <div className='hidden md:flex items-center justify-center gap-3 lg:gap-x-6'>

                    <NavLink to='/' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} font-medium`}>Home</NavLink>

                    <NavLink to='/dashboard' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} font-medium`}>Dashboard</NavLink>

                    <NavLink to='/library' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} font-medium`}>Library</NavLink>

                    <NavLink to='/addresource' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} font-medium`}>Add Resource</NavLink>

                    <NavLink to='/about' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} font-medium`}>About</NavLink>

                </div>
                <div className='hidden md:flex lg:w-90'><input type="text" placeholder='Search Course' className='w-full h-9 border border-gray-300 rounded-lg bg-slate-100 px-3' /></div>     

                <div className='flex gap-4 h-10 justify-center lg:mr-5 lg:gap-6'>
                    <div className='flex flex-col justify-center items-center cursor-pointer'>
                        <div onClick={()=>setlogoutButton(!logoutButton)}>
                            <img src="/user.png" alt="profile" className='h-8 w-8'/>
                        </div>
                        {logoutButton && 
                            <div className='absolute right-0 top-16 bg-white w-32 h-15 rounded-2xl rounded-r-none  flex items-center justify-center'>
                                <button className='bg-red-500 text-white p-2 w-3/4 cursor-pointer hover:bg-red-700 rounded-2xl shadow-2xl ' onClick={handleLogout}>Logout</button>
                            </div>
                        }
                    </div>
                    <button className='md:hidden' onClick={()=>setRenderNav(!renderNav)}><FaBars className='h-5 w-5'/></button>
                </div>
            </nav>
            <div className={`${renderNav ? "block":"hidden"}  absolute flex flex-col w-full px-2 z-50 bg-slate-50/97`}>
                <div className='mt-2 flex flex-col' onClick={()=>setRenderNav(!renderNav)}>
                    <NavLink to='/' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} font-medium px-4 py-2`}>Home</NavLink>

                    <NavLink to='/dashboard' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} px-4 py-2 font-medium`}>Dashboard</NavLink>

                    <NavLink to='/library' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} px-4 py-2 font-medium`}>Library</NavLink>

                    <NavLink to='/about' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} px-4 py-2 font-medium`}>About</NavLink>

                    <NavLink to='/contact' className={({isActive}) =>`${isActive? 'text-green-700': 'text-gray-700'} px-4 py-2 font-medium`}>Contact</NavLink>
                </div>

                <div className='px-4 py-2 mb-2'><input type="text" placeholder='Search Course' className='w-full h-9 border border-gray-300 rounded-lg bg-slate-100 px-3' /></div>
            </div>
        </header>
    )
}