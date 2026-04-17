import mongoose from "mongoose";
import bcryptjs from 'bcryptjs'
const userSchema = new mongoose.Schema(
    {
        fullName:{
            type: String,
            required: true
        },
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        email:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        },
    },
    {
        timestamps:true
    }
);
userSchema.pre("save", async function(){
    if(!this.isModified("password")) return;
    this.password = await bcryptjs.hash(this.password, 10)
    return;
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcryptjs.compare(password, this.password);
}
export const User = mongoose.model("User", userSchema);