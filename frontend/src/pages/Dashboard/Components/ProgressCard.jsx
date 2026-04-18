export default function ProgressCard({title, value, icon, textColor='text-gray-700'}){
    return(
        <div className="bg-white shadow-xl rounded-2xl min-h-fit flex justify-between p-4 md:py-5 lg:p-6">
            <div>
                <p className="mb-2 text-md text-gray-700 lg:text-xl">{title}</p>
                <h3 className={`${textColor} text-3xl font-medium ml-1`}>{value}</h3>
            </div>
            <div className="text-3xl lg:text-4xl">
                {icon}
            </div>
        </div>
    )
}