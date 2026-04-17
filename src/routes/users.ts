import express from 'express';
import { validateUserRegistration } from '../validators/user.validator';
import { userSignUp } from '../controllers/user.controller';

/**
 * @swagger
 * /sign-up:
 *   post:
 *     summary: User Sign Up
 *     description: Create a new user account.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: User already exists or validation error
 *       500:
 *         description: Internal server error
 */
const router = express.Router()

router.post("/sign-up",validateUserRegistration,userSignUp)

export default router