import { User } from "../models/user.model.js";

const registerUser = async(req, res)=>{
    try{
        const {fullName, email, username, password} = req.body;
        if(!fullName || !email || !username || !password){
            return res.status(400).json({message:"All fields are required!"});
        }

        const existingUser = await (User.findOne({username}) && User.findOne({email}));
        if(existingUser){
            return res.status(400).json({message:"User already exist!"});
        }
        const createdUser = await User.create({
            fullName,
            username,
            email,
            password
        });
        const isSuccess = await User.findById(createdUser._id).select("-password");
        if(isSuccess){
            return res.status(201).json({message:"Users registered successfully!",user:isSuccess});
        }
    }
    catch(error){
        res.status(500).json({message:"error", error:error.message});
    }
}
export {registerUser};