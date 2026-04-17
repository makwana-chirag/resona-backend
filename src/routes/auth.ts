import express from 'express';
import { validateUserSignIn } from "../validators/auth.validator";
import { userSignIn } from '../controllers/auth.controller';

const router = express.Router();

/**
 * @swagger
 * /api/v1/auth/sign-in:
 *   post:
 *     tags:
 *       - Authentication Mobile
 *     summary: User Sign In
 *     description: Authenticate user and return JWT token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: User signed in successfully
 *       401:
 *         description: Invalid credentials
 */
router.post("/sign-in", validateUserSignIn, userSignIn);

export default router;