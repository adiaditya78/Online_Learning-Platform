export default function FeatureCard({icon, title, description, color}){
    return(
        <div className='flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border-gray-100 shadow-sm hover:shadow-md tensition-shadow'>
            <div className={`h-16 w-16 mb-6 rounded-2xl bg-linear-to-br ${color} flex items-center justify-center shadow-lg`}>{icon}</div>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>{title}</h3>
            <p className='text-gray-600'>{description}</p>
        </div>
    )
}