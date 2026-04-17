import { Application, Request, Response } from "express";
import express from "express";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from 'swagger-ui-express';
import usersRouter from './routes/users';
import authRouter from './routes/auth';
const app:Application = express();

// Middleware 
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/auth', authRouter);

// Swagger Configuration
const swaggerOptions = {
    definition: {
components: {
  securitySchemes: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    }
  }
},
    openapi : "3.0.0",
    info:{
        title : "Resona API",
        version : "1.0.0",
        description : "Music tracking application backend"
    },
    servers : [
        {
            url : "http://localhost:4000"
        }
    ],
    },
    apis:[
        "./src/routes/*.ts",
    ]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Basic health check 
app.get("/",(req:Request, res:Response)=>{
    res.json({
        message : "Resona API is running"
    })
})

export default app;