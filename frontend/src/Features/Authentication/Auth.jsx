import { useState } from "react"
import Login from "./Login/Login"
import Signup from "./Signup/Signup"
import { FaBook } from "react-icons/fa"
export default function Auth(){
    const [auth, setAuth] = useState(false)
    return(
        <div>
            <div>
                <div className='flex items-center gap-3 h-10 '>
                    <div className='h-10 w-10 flex justify-center items-center bg-linear-to-br from-yellow-500 to-green-400 p-1 rounded-xl'>
                        <FaBook className='h-5 w-5 text-white'/>
                    </div>
                    <h1 className='font-bold text-2xl'>EduLearn</h1>
                </div>
                <div>
                    <h1>Ready to Level Up Your Skills?
                        Welcome to EduLearn!
                    </h1>
                    <p>Log in or create an account to start your learning journey today.</p>
                </div>
                <div>
                    <img src="/Coding.svg"/>
                </div>
            </div>
            <div>
                <button onClick={()=>setAuth(true)}>Sign In</button>
                <button onClick={()=>setAuth(false)}>Sign Up</button>
                {
                    auth? (<Login onCreateAccount={()=>setAuth(false)}/>) : (<Signup/>)
                }
            </div>
        </div>
    )
}