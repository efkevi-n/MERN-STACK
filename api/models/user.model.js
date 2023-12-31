import mongoose from "mongoose";

const userSchema = new mongoose.Schema({    
    useername: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String, 
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true }); // timestamps: true adds createdAt and updatedAt fields

const User = mongoose.model('User', userSchema);


export default User;