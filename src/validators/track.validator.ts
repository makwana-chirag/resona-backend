import { body, validationResult } from "express-validator"
import { Request, Response, NextFunction } from "express";

export const validateTrack = () => {
    // Validation Rules
    body('title').trim().notEmpty().withMessage('Title is required'),

    body('artist').trim().notEmpty().withMessage('Artist is required'),

    // Middleware to handle validation result
    (req:Request, res:Response,next:NextFunction) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                success: false,
                error: errors.array()
            })
        }
        next()
    }
}