import StartCard from '../../Features/DashComponent/StartCard'
import ProgressCard from '../../Features/DashComponent/ProgressCard'
import CourseList from '../../Features/DashComponent/CourseList'
export default function Dashboard() {
    return (
        <div className='flex flex-col gap-3 bg-gray-100 py-2 md:py-5 px-3 md:px-10'>
            <div className='min-h-fit rounded-2xl'>
                <StartCard/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 w-full gap-3'>
                <ProgressCard title="Total Course" value='12' icon='📚' />
                <ProgressCard title="Completed" value='12' icon='✅' textColor='text-green-600' />
                <ProgressCard title="In Progress" value='12' icon='⏳' textColor='text-yellow-600' />
                <ProgressCard title="Day Streak" value='12' icon='🔥' textColor='text-orange-400' />
            </div>
            <div className='flex justify-between mt-4 items-center'>
                <h1 className='font-medium text-xl lg:text-3xl text-gray-700'>Your Course</h1>
                <p className='text-gray-700 text-sm lg:text-md hover:underline'>View All</p>
            </div>
            <div>
                <CourseList />
            </div>
        </div>
    )
}