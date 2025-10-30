import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    auth_id: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    userName: {
        type: String,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    }
})

export default mongoose.model("User", userschema)