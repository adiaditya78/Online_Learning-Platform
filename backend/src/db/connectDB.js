import mongoose from 'mongoose'
import {DB_Name} from "../constants.js"
const connectDb = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
        console.log(`\n DB Connected !! DB Host ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("\n DB Connection Failed",error);
        process.exit(1);
    }
}
export default connectDb