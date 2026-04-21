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
            username : username.toLowerCase().trim(),
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


const loginUser = async(req, res)=>{
    try {
        const {username, password} = req.body;
        if(!username || !password){
            return res.status(400).json({message:"All fields required!"});
        }
        const user = await User.findOne({username})
        if(!user){
            return res.status(404).json({message:"User not exists!"});
        }
        const isCorrectPassword = await user.isPasswordCorrect(password);
        if(!isCorrectPassword){
            return res.status(401).json({message:"wrong password"})
        }
        
        const generatedToken = user.generateAccessToken();
        
        const options = {
            httpOnly: true,
            secure: true
        }

        res
        .status(202)
        .cookie("accessToken", generatedToken, options)
        .json({
            message:"Login Successfully",
            accessToken : generatedToken,
            user: { _id: user._id, fullName: user.fullName, username: user.username, email: user.email }
        })

    } catch (error) {
        return res.status(500).json({message:"Server Error", error:error.message});
    }
}

const logoutUser = async (req, res) => {
    const options = {
        httpOnly: true,
        secure: true
    }
    return res
    .status(200)
    .clearCookie("accessToken", options)
    .json({message: "User logged out successfully"});
}

const getCurrentUser = async (req, res) => {
    return res.status(200).json({message: "Current user fetched successfully", user: req.user});
}

export {registerUser, loginUser, logoutUser, getCurrentUser};