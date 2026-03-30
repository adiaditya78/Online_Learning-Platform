export default function ProgressCard({title, value, icon}){
    return(
        <div>
            <div>
                <p>{title}</p>
                <h3>{value}</h3>
            </div>
            <div>
                {icon}
            </div>
        </div>
    )
}