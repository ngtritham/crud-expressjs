import swaggerJsdoc from "swagger-jsdoc";
import path from "path";

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
  apis: [path.join(__dirname, "../v1/routes/*.js")],
};

export const swaggerSpec = swaggerJsdoc(options);
