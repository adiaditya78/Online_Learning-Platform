import { useState } from "react"
import api from "../../API/axios";
export default function AddResource(){
    const[url, setUrl] = useState("");

    const handleSave = async()=>{
        try {
            const response = await api.post("/api/course/addCourse", {url : url})
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="min-h-screen bg-slate-50 py-16 px-6 md:px-16 lg:px-24 " >
            <div className="max-w-2xl mx-auto">
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Add New Resource
                    </h2>
                    <p className="text-gray-500 mb-8">Paste your YouTube link below to add it to your learning dashboard.</p>
                    <form className="space-y-6 text-left" onSubmit={(e)=>{
                        e.preventDefault(); handleSave();}}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Resource URL</label>
                            <input type="url" className="w-full border border-gray-300 rounded-lg p-3 bg-slate-50 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400" placeholder="https://...." value={url} onChange={(e)=>setUrl(e.target.value)}/>
                        </div>
                        <button type="submit" className="w-full bg-linear-to-r from-yellow-500 to-green-500 text-white font-bold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow mt-4">Save Resource</button>
                    </form>
                </div>
            </div>
        </div>
    )
}