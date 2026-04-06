import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {type : String, required : true, trim : true , minlength : 3, maxlength : 50},
    email : {type : String, required : true, unique : true, trim : true},
    password : {type : String, required : true, trim : true, minlength : 8 , maxlength : 8},
})

export const User = mongoose.model('User', userSchema) 