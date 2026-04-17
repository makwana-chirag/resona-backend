import express from 'express';
import { validateUserSignIn } from "../validators/auth.validator"
import { userSignIn } from '../controllers/auth.controller';

/**
 * @swgger
 * /sign-in:
 *  post: 
 *  summary : User Sign In
 *  description : Authenticate user and return JWT token
 *  requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              type: string
 *              example: user@example.com
 *            password:
 *              type: string
 *              example: "password123"
 *  responses:
 *    200:
 *      description: User signed in successfully
 *    400:
 *      description: Invalid credentials or validation error
 *    500:
 *      description: Internal server error
 */
const router = express.Router()

router.post("/sign-in", validateUserSignIn, userSignIn)

export default router