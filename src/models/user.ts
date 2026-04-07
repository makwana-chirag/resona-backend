import { body } from "express-validator";
import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    name : {type : String, required : true, trim : true , minlength : 3, maxlength : 50},
    email : {type : String, required : true, unique : true, trim : true},
    password : {type : String, required : true, trim : true, minlength : 8 , maxlength : 128},
})

export const User = mongoose.model('User', userSchema) 

export interface UserData {
    name : string,
    email : string,
    password : string,
}

export const userValidation = (userData: UserData) =>{
    const schema = [
        body('name').isString().isLength({min:3,max:50}),
        body('email').isEmail(),
        body('password').isLength({min:8,max:128})
    ]
    return schema;
}