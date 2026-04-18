import { useEffect, useState } from "react"
const courseList = [
        {
            id: 1,
            title: "React JS",
            completed: true,
            progrssBar: 50,
            logoUrl:"https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
        },
        {
            id: 2,
            title: "JavaScript",
            completed: true,
            progrssBar: 50,
            logoUrl:"https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
        },
        {
            id: 3,
            title: "Java",
            completed: true,
            progrssBar: 50,
            logoUrl:"https://img.icons8.com/?size=100&id=5OD485koNIrb&format=png&color=000000",
        }]; 
export default function CourseList(){
    const[courses, setCourse] = useState([])
    
    useEffect(()=>{
        setCourse(courseList);
    },[])

    return(
        <div className="bg-white rounded-2xl p-4 py-5 grid grid-cols-1 gap-4">
            {
                courses.map((course, index)=>(
                    <div className="flex flex-wrap border p-3 justify-between items-center gap-3 rounded-2xl" key={course.id}>
                        <div className="flex md:flex-1 gap-3 items-center  md:gap-5">
                            <img src={course.logoUrl} className="w-10 h-10 md:h-12 md:w-12" />
                            <p className="font-medium text-2xl md:text-2xl">{course.title}</p>
                        </div>
                        <div className="flex gap-3 md:gap-12">
                            <input type="range" value={course.progrssBar} readOnly className="accent-green-500"/>
                            {
                                course.completed && <p>Completed</p>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}