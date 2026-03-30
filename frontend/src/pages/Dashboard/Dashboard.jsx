import StartCard from '../../Features/DashComponent/StartCard'
import ProgressCard from '../../Features/DashComponent/ProgressCard'
import CourseList from '../../Features/DashComponent/CourseList'
export default function Dashboard() {
    return (
        <div>
            <div>
                <StartCard/>
            </div>
            <div>
                <ProgressCard title="Total Course" value='12' icon='📚' />
                <ProgressCard title="Completed" value='12' icon='✅' />
                <ProgressCard title="In Progress" value='12' icon='⏳' />
                <ProgressCard title="Day Streak" value='12' icon='🔥' />
            </div>
            <div>
                <h1>Your Course</h1>
                <p>View All</p>
            </div>
            <div>
                <CourseList />
            </div>
        </div>
    )
}