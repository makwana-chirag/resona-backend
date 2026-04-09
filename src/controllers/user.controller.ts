

import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { User } from "../models/user";

export const registerUser = async (req: Request, res: Response) => {

const isError = validationResult(req)

if (!isError.isEmpty()) {
    return res.status(400).json({ errors: isError.array() })
}

try {
    const { name, email, password } = req.body

    // check if user already exists
    const existingUser = await User.findOne({email})

    if(existingUser) {
        return res.status(400).json({error : "User already exists"})
    }

    // creating and saving the new user
    const user = new User({name,email,password})
    await user.save()
    
    return res.status(201).json({message : "User created successfully"})
} catch (error) {
    return res.status(500).json({ error: "Internal server error" })
}

}