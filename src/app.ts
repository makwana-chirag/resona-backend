import { Application, Request, Response } from "express";
import express from "express";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";

const app:Application = express();

// Middleware 
app.use(cors())
app.use(express.json())

// Swagger Configuration
const swaggerOptions = {
    openapi : "3.0.0",
    info:{
        title : "Resona API",
        version : "1.0.0",
        description : "Music tracking application backend"
    },
    server : [
        {
            url : "http://localhost:3000"
        }
    ],
    apis:[
        "./src/routers/*.ts"
    ]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions)

// Basic health check 
app.get("/",(req:Request, res:Response)=>{
    res.json({
        message : "Resona API is running"
    })
})

export default app;