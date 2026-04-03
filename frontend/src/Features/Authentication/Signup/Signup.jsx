import {Link} from 'react-router-dom'
export default function Signup(){
    return(
        <form className="p-2 flex flex-col gap-2">
            <div>
                <h3 className="font-normal text-gray-900 mb-1">Name</h3>
                <input type="text" className="w-full border border-gray-600 rounded-md px-2 py-1" placeholder="Your Name"/>
            </div>
            <div>
                <h3 className="font-normal text-gray-900 mb-1">Email Address</h3>
                <input type="email" className="w-full border border-gray-600 rounded-md px-2 py-1" placeholder="you@example.com"/>
            </div>
            <div>
                <h3 className="font-normal text-gray-900 mb-1">Password</h3>
                <input type="text" className="w-full border border-gray-600 rounded-md px-2 py-1" placeholder="password"/>
            </div>
            <button className="my-2 w-full bg-green-500 text-white hover:bg-green-600 p-1 rounded-2xl">Create Account</button>
            {/* <div className=" flex justify-between">
                <p> Or continue with</p>
            </div> */}
            <div className="text-center text-sm">Already have an account? <Link to="/login" className="text-green-600 cursor-pointer font-medium hover:underline">Log in</Link></div>
        </form>
    )
}