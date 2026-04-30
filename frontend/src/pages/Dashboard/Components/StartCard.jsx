import { useState } from "react"

function StartCard({islogin}){
    const[studentName, setStudentName] = useState("User")
    return(
        <div className="w-full h-full flex flex-col gap-3">
            <h1 className="font-extrabold text-3xl lg:text-4xl text-gray-800 tracking-normal">Welcome, {studentName}! 👋</h1>
            <p className="text-gray-800 text-lg px-2 italic">"Ready to skill yourself"</p>
        </div>
    )
}
export default StartCard