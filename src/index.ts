import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
import productsRouter from "./routes/products";
import { swaggerSpec } from "./config/swagger";

const app: Application = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/v1/products", productsRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
