import { useState } from "react"

function StartCard(){
    const[studentName, setStudentName] = useState("User")
    return(
        <div>
            <h1>Welcome, {studentName}! 👋</h1>
            <p>Ready to skill yourself</p>
        </div>
    )
}
export default StartCard