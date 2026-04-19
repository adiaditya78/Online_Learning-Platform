import { useState } from "react"
import { Link } from "react-router-dom"
import api from "../../API/axios";
export default function Login(){
    const[formData, setformData] = useState(
        {
            username : "",
            
            password : ""
        }
    );
    const handleChange = (e)=>{
        setformData(
            {
                ...formData,
                [e.target.name] : e.target.value
            }
        )
    }

    const [errorResponse, setErrorResponse] = useState("");
    const [successResponse, setSuccessRes] = useState("");
    const handleLogin = async(e)=>{
        e.preventDefault();
        try {
            const response = await api.post("/api/users/login", formData);
            console.log(response);
            
            setSuccessRes(response.data["message"]);
            localStorage.setItem("accessToken", response.data.accessToken);
            window.location.href = "/";
        } catch (error) {
            console.log(error);
            
            setErrorResponse(error.response?.data["message"] || "Something went wrong!");
        }
    }
    return(
        <form className="p-2 flex flex-col gap-2" onSubmit={handleLogin}>
            <div>
                <h3 className="font-normal text-gray-900 mb-1">Email Address</h3>
                <input type="text" className="w-full border border-gray-600 rounded-md px-2 py-1" placeholder="you@example.com" name="username" value={formData.username} onChange={handleChange}/>
            </div>
            <div>
                <h3 className="font-normal text-gray-900 mb-1">Password</h3>
                <input type="text" className="w-full border border-gray-600 rounded-md px-2 py-1" placeholder="password" name="password" value={formData.password} onChange={handleChange}/>
            </div>
            <div className="w-full flex justify-end"><span className="text-sm text-green-600 cursor-pointer hover:underline">Forget Password?</span></div>
            <button className="my-1 w-full bg-green-500 text-white hover:bg-green-600 p-1 rounded-2xl" onSubmit={handleLogin}>Sign In</button>
            {/* <div className=" flex justify-between">
                <p> Or continue with</p>
            </div> */}
            <div className="text-center text-sm">New to Smart Learn? <Link to='/signup' className="text-green-600 cursor-pointer font-medium hover:underline">Create Account</Link></div>
        </form>
    )
}