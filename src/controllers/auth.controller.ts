import { Request, Response } from "express";
import { validationResult } from "express-validator"
import { User } from "../models/user";


export const userSignIn = async (req : Request, res: Response) => {

    const isError = validationResult(req)

    if(!isError.isEmpty()){
        return res.status(400).json({errors : isError.array()})
    }

    try {
        const { email , password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.status(404).json({error : "invalid credentials"})
        }

        // compare password and email 
        const isMatch = await user.comparePassword(password)

        if(!isMatch){
            return res.status(401).json({error:"invalid credentials"})
        }

        // generate jwt token
        const token = user.createJWT()

        return res.status(200).json({user:{name:user.name,email:user.email,token}})
    } catch (error) {
        return res.status(500).json({error : "Internal server error"})
    }
}
