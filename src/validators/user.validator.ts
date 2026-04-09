import {body} from "express-validator"

export const validateUserRegistration = () => {
    body("name").trim().notEmpty().withMessage("Name is required").isLength({min:3,max:50}).withMessage("Name must be between 3 and 50 characters")
    body("email").trim().isEmail().withMessage("Invalid email").normalizeEmail()
    body("password").trim().notEmpty().withMessage("Password is required").isLength({min:8,max:128}).withMessage("Password must be between 8 and 128 characters")
}