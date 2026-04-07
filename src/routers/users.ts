import express, { Request, Response } from 'express';
import { User, userValidation } from "../models/user"
import { validationResult } from 'express-validator';

const router = express.Router()

router.post("/sign-up",userValidation, async (req:Request,res:Response) => {

    // Error checking
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try{
      const { name, email, password } = req.body

      // check if current user already exists
      const existingUser = await User.findOne({email})
      
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" })
      }

      // creating and saving the new user
      const user = new User({name,email,password})
      await user.save()

      return res.status(201).json({ message: "User created successfully" })

    } catch (error) {
        return res.status(500).json({ error: "Internal server error" })
    }
    
})

export default router