import { useState } from "react"

export default function CourseList(){
    const[courseList, setCourseList] = useState([])
    return(
        <div>
            <div>
                {
                    courseList.map((title)=>())
                }
            </div>
        </div>
    )
}