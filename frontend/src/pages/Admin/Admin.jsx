import { Link } from "react-router-dom"
import { FaBook } from "react-icons/fa"
export default function Admin(){
    return(
        <div>
            <form>
                <div className='flex items-center gap-3 h-10 '>
                    <div className='h-10 w-10 flex justify-center items-center bg-linear-to-br from-yellow-500 to-green-400 p-1 rounded-xl'>
                        <FaBook className='h-5 w-5 text-white'/>
                    </div>
                    <h1 className='font-bold text-2xl'>EduLearn</h1>
                </div>
            </form>
        </div>
    )
}