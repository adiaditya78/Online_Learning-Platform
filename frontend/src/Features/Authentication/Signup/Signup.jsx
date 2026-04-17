import { useState } from 'react'
import {Link} from 'react-router-dom'
import api from '../../../API/axios'
export default function Signup(){
    const [formData, setformData] = useState(
        {
            fullName:"",
            email: "",
            username:"",
            password:""
        })

    const handleChange = (e)=>{
        setformData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }
    const [errorResponse, setErrorResponse] = useState("");
    const [successResponse, setSuccessRes] = useState("");
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const response = await api.post("/api/users/signup", formData);
            setSuccessRes(response.data["message"]);
        } catch (error) {
            setErrorResponse(error.response?.data["message"] || "Something went wrong!");
        }
    }
    return(
        <form className="p-2 flex flex-col gap-2 w-full justify-center items-center" onSubmit={handleSubmit}>
            <div className='w-full'>
                <h3 className="font-normal text-gray-900 mb-1">Name</h3>
                <input type="text" className="w-full border border-gray-600 rounded-md px-2 py-1" placeholder="Your Name" value={formData.fullName} name='fullName' onChange={handleChange} required />
            </div>
            <div className='w-full'>
                <h3 className="font-normal text-gray-900 mb-1">Email Address</h3>
                <input type="email" className="w-full border border-gray-600 rounded-md px-2 py-1" placeholder="you@example.com" name='email' value={formData.email} onChange={handleChange} required/>
            </div>
            <div className='w-full'>
                <h3 className="font-normal text-gray-900 mb-1">UserName</h3>
                <input type="email" className="w-full border border-gray-600 rounded-md px-2 py-1" placeholder='username' name='username' value={formData.username} onChange={handleChange} required/>
            </div>
            <div className='w-full'>
                <h3 className="font-normal text-gray-900 mb-1">Password</h3>
                <input type="text" className="w-full border border-gray-600 rounded-md px-2 py-1" placeholder="password" name='password' value={formData.password} onChange={handleChange} required/>
            </div>
            <button className="mt-2 w-full bg-green-500 text-white hover:bg-green-600 p-1 rounded-2xl">Create Account</button>

            {(successResponse || errorResponse) && <p className={`${successResponse ? "text-green-500":"text-red-500"} text-sm`}>{(successResponse || errorResponse)}</p>}

            <div className="text-center text-sm">Already have an account? <Link to="/login" className="text-green-600 cursor-pointer font-medium hover:underline">Log in</Link></div>
        </form>
    )
}