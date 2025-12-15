import "reflect-metadata";
import "dotenv/config";
import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
import productsRouter from "./v1/routes/products";
import { swaggerSpec } from "./config/swagger";
import { AppDataSource } from "./config/database";

const app: Application = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/v1/products", productsRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
      console.log(`Open API docs at: http://localhost:${PORT}/swagger`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });
