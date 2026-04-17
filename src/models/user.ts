import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// This helps TypeScript understand what a "User" looks like in your code
export interface IUser extends mongoose.Document {
    name: string;
    email: string;
    password: string;
    comparePassword(password: string): Promise<boolean>;
    createJWT():string
}

const userSchema = new mongoose.Schema({
    name : {type : String, required : true, trim : true , minlength : 3, maxlength : 50},
    email : {type : String, required : true, unique : true, trim : true},
    password : {type : String, required : true, trim : true, minlength : 8 , maxlength : 128},
},{timestamps:true})


// hashing password before storing it on db
userSchema.pre<IUser>("save", async function () {
    // If password isn't changed, just return (same as calling next())
    if (!this.isModified("password")) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
});

// helper method to compare password 
userSchema.methods.comparePassword = async function(password: string){
    return await bcrypt.compare(password,this.password)
}

// create jwt 
userSchema.methods.createJWT = function(){
    return jwt.sign({userId: this._id, email : this.email}, process.env.JWT_SECRET!,{expiresIn : "1d"} )
}

export const User = mongoose.model<IUser>('User', userSchema)