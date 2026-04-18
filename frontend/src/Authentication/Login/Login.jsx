import { Link } from "react-router-dom"
export default function Login(){
    const handleLogin = ()=>{

    }
    return(
        <form className="p-2 flex flex-col gap-2" onSubmit={handleLogin}>
            <div>
                <h3 className="font-normal text-gray-900 mb-1">Email Address</h3>
                <input type="text" className="w-full border border-gray-600 rounded-md px-2 py-1" placeholder="you@example.com"/>
            </div>
            <div>
                <h3 className="font-normal text-gray-900 mb-1">Password</h3>
                <input type="text" className="w-full border border-gray-600 rounded-md px-2 py-1" placeholder="password"/>
            </div>
            <div className="w-full flex justify-end"><span className="text-sm text-green-600 cursor-pointer hover:underline">Forget Password?</span></div>
            <button className="my-1 w-full bg-green-500 text-white hover:bg-green-600 p-1 rounded-2xl">Sign In</button>
            {/* <div className=" flex justify-between">
                <p> Or continue with</p>
            </div> */}
            <div className="text-center text-sm">New to Smart Learn? <Link to='/signup' className="text-green-600 cursor-pointer font-medium hover:underline">Create Account</Link></div>
        </form>
    )
}