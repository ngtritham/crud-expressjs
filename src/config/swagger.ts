import swaggerJsdoc from "swagger-jsdoc";
import path from "path";

// Determine file extension based on environment
// In development, we run TypeScript directly with ts-node-dev
// In production, we run compiled JavaScript files
const isDevelopment = process.env.NODE_ENV === "development";
const fileExtension = isDevelopment ? "ts" : "js";
const routesPath = isDevelopment
  ? path.join(__dirname, "../v1/routes/*.ts")
  : path.join(__dirname, "../v1/routes/*.js");

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CRUD Express API",
      version: "1.0.0",
      description: "Basic CRUD API service with Express and TypeScript",
    },
    servers: [
      {
        url: "http://localhost:8080",
        description: "Development server",
      },
    ],
  },
  apis: [routesPath],
};

export const swaggerSpec = swaggerJsdoc(options);
